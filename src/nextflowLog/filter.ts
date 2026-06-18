import * as vscode from "vscode";

import { FILTERED_SCHEME, isNextflowLogEditor, LANGUAGE_ID } from "./constants";
import {
  FilteredLogProvider,
  READONLY_MESSAGE,
  switchToFiltered,
  switchToOriginal,
  toFilteredUri,
  toOriginalUri,
  ViewState
} from "./filteredView";
import { LOG_LEVELS, LogLevel } from "./parseEntries";

const FILTER_ENABLED_KEY = "nextflow.log.filter.enabled";
const FILTER_HIDDEN_LEVELS_KEY = "nextflow.log.filter.hiddenLevels";
const FILTER_STRIP_ANSI_KEY = "nextflow.log.filter.stripAnsi";

interface FileState extends ViewState {
  filterEnabled: boolean;
}

type ItemAction =
  | "level"
  | "stripAnsi"
  | "filter"
  | "saveWorkspace"
  | "saveGlobal"
  | "docs"
  | "none";

interface FilterItem extends vscode.QuickPickItem {
  action: ItemAction;
  level?: LogLevel;
}

const DOCS_URL =
  "https://github.com/nextflow-io/vscode-language-nextflow#configuration";

function readDefaultFilterEnabled(): boolean {
  return vscode.workspace.getConfiguration().get<boolean>(FILTER_ENABLED_KEY, true);
}

function readDefaultHiddenLevels(): Set<LogLevel> {
  const raw = vscode.workspace
    .getConfiguration()
    .get<string[]>(FILTER_HIDDEN_LEVELS_KEY, []);
  const set = new Set<LogLevel>();
  for (const v of raw) {
    if ((LOG_LEVELS as readonly string[]).includes(v)) {
      set.add(v as LogLevel);
    }
  }
  return set;
}

function readDefaultStripAnsi(): boolean {
  return vscode.workspace.getConfiguration().get<boolean>(FILTER_STRIP_ANSI_KEY, true);
}

function defaultState(): FileState {
  return {
    filterEnabled: readDefaultFilterEnabled(),
    hidden: readDefaultHiddenLevels(),
    stripAnsi: readDefaultStripAnsi(),
  };
}

async function saveAllSettings(
  state: FileState,
  target: vscode.ConfigurationTarget
): Promise<void> {
  const config = vscode.workspace.getConfiguration();
  const hiddenList = LOG_LEVELS.filter((l) => state.hidden.has(l));
  // Pass `undefined` to remove the key from settings.json when the value
  // matches the package.json default — avoids leaving noisy default entries.
  await config.update(
    FILTER_ENABLED_KEY,
    state.filterEnabled === true ? undefined : state.filterEnabled,
    target
  );
  await config.update(
    FILTER_HIDDEN_LEVELS_KEY,
    hiddenList.length === 0 ? undefined : hiddenList,
    target
  );
  await config.update(
    FILTER_STRIP_ANSI_KEY,
    state.stripAnsi === true ? undefined : state.stripAnsi,
    target
  );
}

function describeState(state: FileState): string {
  if (!state.filterEnabled) return "$(file) Raw file (click to change)";
  if (state.hidden.size === 0)
    return "$(list-filter) Filter log levels";
  const visible = LOG_LEVELS.filter((l) => !state.hidden.has(l));
  return `$(list-filter) ${visible.length ? `Showing: ${visible.join(" · ")}` : "Nothing visible"}`;
}

function activeOriginalUri(): vscode.Uri | undefined {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return undefined;
  if (editor.document.uri.scheme === FILTERED_SCHEME) {
    return toOriginalUri(editor.document.uri);
  }
  if (editor.document.languageId === LANGUAGE_ID) {
    return editor.document.uri;
  }
  return undefined;
}

class FilterCodeLensProvider implements vscode.CodeLensProvider {
  private readonly emitter = new vscode.EventEmitter<void>();
  readonly onDidChangeCodeLenses = this.emitter.event;

  constructor(
    private readonly stateFor: (uri: vscode.Uri) => FileState | undefined
  ) {}

  refresh(): void {
    this.emitter.fire();
  }

  provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
    const originalUri =
      document.uri.scheme === FILTERED_SCHEME
        ? toOriginalUri(document.uri)
        : document.uri;
    const state = this.stateFor(originalUri);
    if (!state) return [];
    const range = new vscode.Range(0, 0, 0, 0);
    let title: string;
    if (!state.filterEnabled) {
      title = "$(file)  Viewing raw log file (click to change)";
    } else if (state.hidden.size === 0) {
      title = "$(list-filter)  Filter log levels";
    } else {
      title = `$(list-filter)  Hidden: ${LOG_LEVELS.filter((l) => state.hidden.has(l)).join(", ")} (click to change)`;
    }
    return [
      new vscode.CodeLens(range, { title, command: "nextflow.log.filter.menu" })
    ];
  }
}

export function activateFilter(context: vscode.ExtensionContext): void {
  const states = new Map<string, FileState>();

  const getOrInit = (originalUri: vscode.Uri): FileState => {
    const key = originalUri.toString();
    let state = states.get(key);
    if (!state) {
      state = defaultState();
      states.set(key, state);
    }
    return state;
  };

  const peek = (originalUri: vscode.Uri): FileState | undefined =>
    states.get(originalUri.toString());

  const provider = new FilteredLogProvider((uri) => getOrInit(uri));
  context.subscriptions.push(
    vscode.workspace.registerFileSystemProvider(FILTERED_SCHEME, provider, {
      isReadonly: READONLY_MESSAGE,
      isCaseSensitive: true
    })
  );

  const codeLensProvider = new FilterCodeLensProvider(peek);
  context.subscriptions.push(
    vscode.languages.registerCodeLensProvider(
      [{ language: LANGUAGE_ID }, { scheme: FILTERED_SCHEME }],
      codeLensProvider
    )
  );

  const statusBar = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBar.tooltip = "Click to change Nextflow log view";
  statusBar.command = "nextflow.log.filter.menu";
  context.subscriptions.push(statusBar);

  const updateStatusBar = (): void => {
    const editor = vscode.window.activeTextEditor;
    const originalUri = activeOriginalUri();
    if (editor && originalUri && isNextflowLogEditor(editor)) {
      const state = getOrInit(originalUri);
      statusBar.text = describeState(state);
      statusBar.backgroundColor =
        state.hidden.size > 0
          ? new vscode.ThemeColor("statusBarItem.warningBackground")
          : undefined;
      statusBar.show();
    } else {
      statusBar.hide();
    }
  };

  const syncEditor = async (editor: vscode.TextEditor): Promise<void> => {
    if (editor.document.languageId !== LANGUAGE_ID) return;
    const isFiltered = editor.document.uri.scheme === FILTERED_SCHEME;
    const originalUri = isFiltered
      ? toOriginalUri(editor.document.uri)
      : editor.document.uri;
    const state = getOrInit(originalUri);
    if (state.filterEnabled) {
      await switchToFiltered(editor);
    } else {
      await switchToOriginal(editor);
    }
  };

  const syncAllEditors = async (): Promise<void> => {
    await Promise.all(vscode.window.visibleTextEditors.map(syncEditor));
    provider.refreshAll();
    codeLensProvider.refresh();
    updateStatusBar();
  };

  const refreshCurrent = (): void => {
    provider.refreshAll();
    codeLensProvider.refresh();
    updateStatusBar();
  };

  const activeState = (): FileState | undefined => {
    const originalUri = activeOriginalUri();
    return originalUri ? getOrInit(originalUri) : undefined;
  };

  const toggleLevel = (level: LogLevel): void => {
    const state = activeState();
    if (!state) return;
    if (state.hidden.has(level)) state.hidden.delete(level);
    else state.hidden.add(level);
    if (state.filterEnabled) refreshCurrent();
  };

  const toggleStripAnsi = (): void => {
    const state = activeState();
    if (!state) return;
    state.stripAnsi = !state.stripAnsi;
    if (state.filterEnabled) refreshCurrent();
  };

  const toggleFilter = async (): Promise<void> => {
    const state = activeState();
    if (!state) return;
    state.filterEnabled = !state.filterEnabled;
    await syncAllEditors();
  };

  const persistSettings = async (
    target: vscode.ConfigurationTarget
  ): Promise<void> => {
    const state = activeState();
    if (!state) return;
    await saveAllSettings(state, target);
    const scope =
      target === vscode.ConfigurationTarget.Global ? "global" : "workspace";
    vscode.window.setStatusBarMessage(
      `Nextflow log view saved to ${scope} settings`,
      3000
    );
  };

  context.subscriptions.push(
    vscode.commands.registerCommand("nextflow.log.filter.toggle", toggleFilter)
  );

  const openFilterMenu = (): void => {
    const state = activeState();
    if (!state) return;

    const qp = vscode.window.createQuickPick<FilterItem>();
    qp.title = "Nextflow log filtering";
    qp.placeholder = "Click an option to toggle";
    qp.canSelectMany = false;

    const separator = (label: string): FilterItem => ({
      action: "none",
      label,
      kind: vscode.QuickPickItemKind.Separator
    });

    const buildItems = (): FilterItem[] => {
      if (!state.filterEnabled) {
        return [
          {
            action: "filter",
            label: "$(arrow-left) Return to filtered view"
          },
          {
            action: "docs",
            label: "$(book) View all settings in the documentation"
          }
        ];
      }
      const items: FilterItem[] = [separator("Log levels")];
      for (const level of LOG_LEVELS) {
        items.push({
          action: "level",
          level,
          label: `$(${state.hidden.has(level) ? "eye-closed" : "eye"}) ${level}`,
          description: state.hidden.has(level) ? "hidden" : undefined
        });
      }
      items.push(separator("ANSI escape codes"));
      items.push({
        action: "stripAnsi",
        label: `$(${state.stripAnsi ? "check" : "circle-slash"}) Strip ANSI codes`
      });
      items.push(separator("Persist current view"));
      items.push({
        action: "saveWorkspace",
        label: "$(save) Save to workspace settings"
      });
      items.push({
        action: "saveGlobal",
        label: "$(globe) Save to global settings"
      });
      items.push(separator("Advanced"));
      items.push({
        action: "filter",
        label: "$(go-to-file) Open as editable file"
      });
      items.push({
        action: "docs",
        label: "$(book) View all settings in the documentation"
      });
      return items;
    };

    qp.items = buildItems();

    qp.onDidChangeSelection(async (items) => {
      if (items.length === 0) return;
      const picked = items[0];
      qp.selectedItems = [];
      if (picked.action === "level" && picked.level) {
        toggleLevel(picked.level);
      } else if (picked.action === "stripAnsi") {
        toggleStripAnsi();
      } else if (picked.action === "filter") {
        await toggleFilter();
      } else if (picked.action === "saveWorkspace") {
        await persistSettings(vscode.ConfigurationTarget.Workspace);
        qp.hide();
        return;
      } else if (picked.action === "saveGlobal") {
        await persistSettings(vscode.ConfigurationTarget.Global);
        qp.hide();
        return;
      } else if (picked.action === "docs") {
        await vscode.env.openExternal(vscode.Uri.parse(DOCS_URL));
        qp.hide();
        return;
      }
      qp.items = buildItems();
    });

    qp.onDidHide(() => qp.dispose());
    qp.show();
  };

  context.subscriptions.push(
    vscode.commands.registerCommand("nextflow.log.filter.menu", openFilterMenu)
  );

  // Drop state when both the filtered tab and the original tab for a log
  // file are gone — i.e. the user has truly closed the file, not just
  // swapped between cleaned/raw views.
  const dropOrphanedStates = (): void => {
    if (states.size === 0) return;
    const openUris = new Set<string>();
    for (const group of vscode.window.tabGroups.all) {
      for (const tab of group.tabs) {
        if (tab.input instanceof vscode.TabInputText) {
          openUris.add(tab.input.uri.toString());
        }
      }
    }
    for (const key of [...states.keys()]) {
      const originalUri = vscode.Uri.parse(key);
      const filtered = toFilteredUri(originalUri).toString();
      if (!openUris.has(key) && !openUris.has(filtered)) {
        states.delete(key);
      }
    }
  };

  setTimeout(() => void syncAllEditors(), 0);

  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(updateStatusBar),
    vscode.window.onDidChangeVisibleTextEditors(() => {
      void syncAllEditors();
    }),
    vscode.window.tabGroups.onDidChangeTabs(() => {
      dropOrphanedStates();
    })
  );
}
