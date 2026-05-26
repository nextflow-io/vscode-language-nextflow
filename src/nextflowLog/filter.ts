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

const HIDDEN_KEY = "nextflow.log.hiddenLevels";
const STRIP_KEY = "nextflow.log.stripAnsi";
const RAW_KEY = "nextflow.log.showRawFile";

interface FileState extends ViewState {
  showRaw: boolean;
}

type ItemAction =
  | "level"
  | "stripAnsi"
  | "showRaw"
  | "saveWorkspace"
  | "saveGlobal"
  | "none";

interface FilterItem extends vscode.QuickPickItem {
  action: ItemAction;
  level?: LogLevel;
}

function readDefaultHidden(): Set<LogLevel> {
  const raw = vscode.workspace
    .getConfiguration()
    .get<string[]>(HIDDEN_KEY, []);
  const set = new Set<LogLevel>();
  for (const v of raw) {
    if ((LOG_LEVELS as readonly string[]).includes(v)) {
      set.add(v as LogLevel);
    }
  }
  return set;
}

function readDefaultStripAnsi(): boolean {
  return vscode.workspace.getConfiguration().get<boolean>(STRIP_KEY, true);
}

function readDefaultShowRaw(): boolean {
  return vscode.workspace.getConfiguration().get<boolean>(RAW_KEY, false);
}

function defaultState(): FileState {
  return {
    hidden: readDefaultHidden(),
    stripAnsi: readDefaultStripAnsi(),
    showRaw: readDefaultShowRaw()
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
    HIDDEN_KEY,
    hiddenList.length === 0 ? undefined : hiddenList,
    target
  );
  await config.update(
    STRIP_KEY,
    state.stripAnsi === true ? undefined : state.stripAnsi,
    target
  );
  await config.update(
    RAW_KEY,
    state.showRaw === false ? undefined : state.showRaw,
    target
  );
}

function describeState(state: FileState): string {
  if (state.showRaw) return "$(file) Raw file — click to clean";
  if (state.hidden.size === 0)
    return "$(list-filter) Filter Nextflow log levels";
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
    if (state.showRaw) {
      title = "$(file)  Viewing raw .nextflow.log — click to change";
    } else if (state.hidden.size === 0) {
      title = "$(list-filter)  Filter visible log levels";
    } else {
      title = `$(list-filter)  Hidden: ${LOG_LEVELS.filter((l) => state.hidden.has(l)).join(", ")} — click to change`;
    }
    return [
      new vscode.CodeLens(range, { title, command: "nextflow.log.filterMenu" })
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
  statusBar.command = "nextflow.log.filterMenu";
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
    if (state.showRaw) {
      await switchToOriginal(editor);
    } else if (!state.showRaw) {
      await switchToFiltered(editor);
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
    if (!state.showRaw) refreshCurrent();
  };

  const toggleStripAnsi = (): void => {
    const state = activeState();
    if (!state) return;
    state.stripAnsi = !state.stripAnsi;
    if (!state.showRaw) refreshCurrent();
  };

  const toggleShowRaw = async (): Promise<void> => {
    const state = activeState();
    if (!state) return;
    state.showRaw = !state.showRaw;
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

  for (const level of LOG_LEVELS) {
    const cap = level.charAt(0) + level.slice(1).toLowerCase();
    context.subscriptions.push(
      vscode.commands.registerCommand(`nextflow.log.toggle${cap}`, () =>
        toggleLevel(level)
      )
    );
  }
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "nextflow.log.toggleStripAnsi",
      toggleStripAnsi
    ),
    vscode.commands.registerCommand(
      "nextflow.log.toggleShowRawFile",
      toggleShowRaw
    )
  );

  const openFilterMenu = (): void => {
    const state = activeState();
    if (!state) return;

    const qp = vscode.window.createQuickPick<FilterItem>();
    qp.title = "Nextflow log view";
    qp.placeholder = "Click an option to toggle";
    qp.canSelectMany = false;

    const separator = (label: string): FilterItem => ({
      action: "none",
      label,
      kind: vscode.QuickPickItemKind.Separator
    });

    const buildItems = (): FilterItem[] => {
      if (state.showRaw) {
        return [
          {
            action: "showRaw",
            label: "$(arrow-left) Return to cleaned view"
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
        action: "showRaw",
        label: "$(go-to-file) Open as editable file"
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
      } else if (picked.action === "showRaw") {
        await toggleShowRaw();
      } else if (picked.action === "saveWorkspace") {
        await persistSettings(vscode.ConfigurationTarget.Workspace);
        qp.hide();
        return;
      } else if (picked.action === "saveGlobal") {
        await persistSettings(vscode.ConfigurationTarget.Global);
        qp.hide();
        return;
      }
      qp.items = buildItems();
    });

    qp.onDidHide(() => qp.dispose());
    qp.show();
  };

  context.subscriptions.push(
    vscode.commands.registerCommand("nextflow.log.filterMenu", openFilterMenu)
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
