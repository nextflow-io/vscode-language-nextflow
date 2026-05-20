import * as vscode from "vscode";

import { FILTERED_SCHEME, LANGUAGE_ID } from "./constants";
import {
  FilteredLogProvider,
  READONLY_MESSAGE,
  switchToFiltered,
  switchToOriginal,
  toOriginalUri
} from "./filteredView";
import { LOG_LEVELS, LogLevel } from "./parseEntries";

const CONFIG_KEY = "nextflow.log.hiddenLevels";

interface LevelItem extends vscode.QuickPickItem {
  level: LogLevel;
}

function readHiddenLevels(): Set<LogLevel> {
  const raw = vscode.workspace
    .getConfiguration()
    .get<string[]>(CONFIG_KEY, []);
  const set = new Set<LogLevel>();
  for (const v of raw) {
    if ((LOG_LEVELS as readonly string[]).includes(v)) {
      set.add(v as LogLevel);
    }
  }
  return set;
}

async function writeHiddenLevels(levels: Set<LogLevel>): Promise<void> {
  const ordered = LOG_LEVELS.filter((l) => levels.has(l));
  const target = vscode.workspace.workspaceFolders
    ? vscode.ConfigurationTarget.Workspace
    : vscode.ConfigurationTarget.Global;
  await vscode.workspace.getConfiguration().update(CONFIG_KEY, ordered, target);
}

function formatStatus(hidden: Set<LogLevel>): string {
  if (hidden.size === 0) return "$(list-filter) Filter Nextflow log levels";
  const visible = LOG_LEVELS.filter((l) => !hidden.has(l));
  if (visible.length === 0) return "$(list-filter) Nothing visible";
  return `$(list-filter) Showing: ${visible.join(" · ")}`;
}

function isNextflowLogEditor(editor: vscode.TextEditor): boolean {
  return (
    editor.document.languageId === LANGUAGE_ID ||
    editor.document.uri.scheme === FILTERED_SCHEME
  );
}

class FilterCodeLensProvider implements vscode.CodeLensProvider {
  private readonly emitter = new vscode.EventEmitter<void>();
  readonly onDidChangeCodeLenses = this.emitter.event;

  constructor(private readonly getHidden: () => Set<LogLevel>) {}

  refresh(): void {
    this.emitter.fire();
  }

  provideCodeLenses(): vscode.CodeLens[] {
    const hidden = this.getHidden();
    const range = new vscode.Range(0, 0, 0, 0);
    const title =
      hidden.size === 0
        ? "$(list-filter)  Filter visible log levels"
        : `$(list-filter)  Hidden: ${LOG_LEVELS.filter((l) => hidden.has(l)).join(", ")} — click to change`;
    return [
      new vscode.CodeLens(range, {
        title,
        command: "nextflow.log.filterMenu"
      })
    ];
  }
}

export function activateFilter(context: vscode.ExtensionContext): void {
  let hidden = readHiddenLevels();

  const provider = new FilteredLogProvider(() => hidden);
  context.subscriptions.push(
    vscode.workspace.registerFileSystemProvider(FILTERED_SCHEME, provider, {
      isReadonly: READONLY_MESSAGE,
      isCaseSensitive: true
    })
  );

  const codeLensProvider = new FilterCodeLensProvider(() => hidden);
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
  statusBar.tooltip = "Click to filter visible log levels";
  statusBar.command = "nextflow.log.filterMenu";
  context.subscriptions.push(statusBar);

  const updateStatusBar = (): void => {
    const editor = vscode.window.activeTextEditor;
    if (editor && isNextflowLogEditor(editor)) {
      statusBar.text = formatStatus(hidden);
      statusBar.backgroundColor =
        hidden.size > 0
          ? new vscode.ThemeColor("statusBarItem.warningBackground")
          : undefined;
      statusBar.show();
    } else {
      statusBar.hide();
    }
  };

  const applyFilter = async (): Promise<void> => {
    for (const editor of vscode.window.visibleTextEditors) {
      const onFiltered = editor.document.uri.scheme === FILTERED_SCHEME;
      const onOriginalNextflowLog =
        editor.document.languageId === LANGUAGE_ID && !onFiltered;

      if (hidden.size === 0 && onFiltered) {
        await switchToOriginal(editor);
      } else if (hidden.size > 0 && onOriginalNextflowLog) {
        await switchToFiltered(editor);
      }
    }
    provider.refreshAll();
    codeLensProvider.refresh();
    updateStatusBar();
  };

  const toggle = async (level: LogLevel): Promise<void> => {
    if (hidden.has(level)) hidden.delete(level);
    else hidden.add(level);
    await applyFilter();
    await writeHiddenLevels(hidden);
  };

  for (const level of LOG_LEVELS) {
    const cap = level.charAt(0) + level.slice(1).toLowerCase();
    context.subscriptions.push(
      vscode.commands.registerCommand(`nextflow.log.toggle${cap}`, () =>
        toggle(level)
      )
    );
  }

  const openFilterMenu = (): void => {
    const qp = vscode.window.createQuickPick<LevelItem>();
    qp.title = "Nextflow log: visible levels";
    qp.placeholder = "Click a level to toggle visibility";
    qp.canSelectMany = false;

    const buildItems = (): LevelItem[] =>
      LOG_LEVELS.map((level) => ({
        level,
        label: `$(${hidden.has(level) ? "eye-closed" : "eye"}) ${level}`,
        description: hidden.has(level) ? "hidden" : "visible"
      }));

    qp.items = buildItems();

    qp.onDidChangeSelection(async (items) => {
      if (items.length === 0) return;
      const picked = items[0];
      qp.selectedItems = [];
      await toggle(picked.level);
      qp.items = buildItems();
    });

    qp.onDidHide(() => qp.dispose());
    qp.show();
  };

  context.subscriptions.push(
    vscode.commands.registerCommand("nextflow.log.filterMenu", openFilterMenu)
  );

  // Apply current filter on activation (e.g., if hiddenLevels was persisted)
  void applyFilter();

  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(updateStatusBar),
    vscode.workspace.onDidOpenTextDocument((doc) => {
      // When a brand-new nextflow-log file opens, swap it to filtered if filtering is active.
      if (hidden.size === 0) return;
      if (doc.languageId !== LANGUAGE_ID) return;
      if (doc.uri.scheme === FILTERED_SCHEME) return;
      void applyFilter();
    }),
    vscode.workspace.onDidChangeTextDocument((event) => {
      // If the original file changes (e.g., live tail), refresh its filtered view.
      const filteredOpen = vscode.workspace.textDocuments.find(
        (d) =>
          d.uri.scheme === FILTERED_SCHEME &&
          toOriginalUri(d.uri).toString() === event.document.uri.toString()
      );
      if (filteredOpen) provider.refreshAll();
    }),
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (!event.affectsConfiguration(CONFIG_KEY)) return;
      hidden = readHiddenLevels();
      void applyFilter();
    })
  );
}
