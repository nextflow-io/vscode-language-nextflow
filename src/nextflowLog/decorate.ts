import * as vscode from "vscode";

import { isNextflowLogEditor } from "./constants";
import { entryRange, getEntries, LogLevel } from "./parseEntries";

const DIM_LEVELS = new Set<LogLevel>(["TRACE", "DEBUG"]);

const DEBOUNCE_MS = 50;

function readOpacity(): number {
  const value = vscode.workspace
    .getConfiguration("nextflow.log")
    .get<number>("debugOpacity", 0.3);
  return Math.max(0.1, Math.min(1.0, value));
}

function makeDimDecoration(opacity: number): vscode.TextEditorDecorationType {
  return vscode.window.createTextEditorDecorationType({
    opacity: String(opacity),
    rangeBehavior: vscode.DecorationRangeBehavior.OpenOpen
  });
}

function makeErrorDecoration(): vscode.TextEditorDecorationType {
  return vscode.window.createTextEditorDecorationType({
    isWholeLine: true,
    backgroundColor: new vscode.ThemeColor("inputValidation.errorBackground"),
    overviewRulerColor: new vscode.ThemeColor("editorError.foreground"),
    overviewRulerLane: vscode.OverviewRulerLane.Right
  });
}

function makeWarnDecoration(): vscode.TextEditorDecorationType {
  return vscode.window.createTextEditorDecorationType({
    isWholeLine: true,
    backgroundColor: new vscode.ThemeColor("inputValidation.warningBackground"),
    overviewRulerColor: new vscode.ThemeColor("editorWarning.foreground"),
    overviewRulerLane: vscode.OverviewRulerLane.Right
  });
}

function makeGrayLevelDecoration(): vscode.TextEditorDecorationType {
  return vscode.window.createTextEditorDecorationType({
    color: new vscode.ThemeColor("disabledForeground")
  });
}

export function activateDecorate(context: vscode.ExtensionContext): void {
  let dimDecoration = makeDimDecoration(readOpacity());
  const errorDecoration = makeErrorDecoration();
  const warnDecoration = makeWarnDecoration();
  const grayLevelDecoration = makeGrayLevelDecoration();
  context.subscriptions.push(
    dimDecoration,
    errorDecoration,
    warnDecoration,
    grayLevelDecoration
  );

  const pending = new Map<string, NodeJS.Timeout>();

  const refresh = (editor: vscode.TextEditor): void => {
    if (!isNextflowLogEditor(editor)) {
      editor.setDecorations(dimDecoration, []);
      editor.setDecorations(errorDecoration, []);
      editor.setDecorations(warnDecoration, []);
      editor.setDecorations(grayLevelDecoration, []);
      return;
    }
    const entries = getEntries(editor.document);
    const dim: vscode.Range[] = [];
    const errors: vscode.Range[] = [];
    const warnings: vscode.Range[] = [];
    const grayLevels: vscode.Range[] = [];
    for (const entry of entries) {
      const range = entryRange(entry, editor.document);
      if (DIM_LEVELS.has(entry.level)) {
        dim.push(range);
        grayLevels.push(
          new vscode.Range(
            entry.startLine,
            entry.levelStart,
            entry.startLine,
            entry.levelEnd
          )
        );
      } else if (entry.level === "ERROR") {
        errors.push(range);
      } else if (entry.level === "WARN") {
        warnings.push(range);
      }
    }
    editor.setDecorations(dimDecoration, dim);
    editor.setDecorations(errorDecoration, errors);
    editor.setDecorations(warnDecoration, warnings);
    editor.setDecorations(grayLevelDecoration, grayLevels);
  };

  const schedule = (editor: vscode.TextEditor): void => {
    const key = editor.document.uri.toString();
    const existing = pending.get(key);
    if (existing) clearTimeout(existing);
    pending.set(
      key,
      setTimeout(() => {
        pending.delete(key);
        refresh(editor);
      }, DEBOUNCE_MS)
    );
  };

  const refreshAll = (): void => {
    for (const editor of vscode.window.visibleTextEditors) refresh(editor);
  };

  refreshAll();

  context.subscriptions.push(
    vscode.window.onDidChangeVisibleTextEditors(refreshAll),
    vscode.workspace.onDidChangeTextDocument((event) => {
      for (const editor of vscode.window.visibleTextEditors) {
        if (editor.document === event.document) schedule(editor);
      }
    }),
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (!event.affectsConfiguration("nextflow.log.debugOpacity")) return;
      dimDecoration.dispose();
      dimDecoration = makeDimDecoration(readOpacity());
      context.subscriptions.push(dimDecoration);
      refreshAll();
    })
  );
}
