import * as vscode from "vscode";

import { FILTERED_SCHEME, LANGUAGE_ID } from "./constants";
import { getEntries, LogLevel } from "./parseEntries";

const ANSI_ESCAPE = /\x1b\[[0-9;]*[A-Za-z]/g;
const ENCODER = new TextEncoder();

export function toFilteredUri(original: vscode.Uri): vscode.Uri {
  return original.with({
    scheme: FILTERED_SCHEME,
    query: `from=${original.scheme}`
  });
}

export function toOriginalUri(filtered: vscode.Uri): vscode.Uri {
  const params = new URLSearchParams(filtered.query);
  const scheme = params.get("from") || "file";
  return filtered.with({ scheme, query: "" });
}

export const READONLY_MESSAGE = new vscode.MarkdownString(
  "Cannot edit a cleaned Nextflow log view"
);

export interface ViewState {
  hidden: Set<LogLevel>;
  stripAnsi: boolean;
}

export class FilteredLogProvider implements vscode.FileSystemProvider {
  private readonly emitter = new vscode.EventEmitter<vscode.FileChangeEvent[]>();
  readonly onDidChangeFile = this.emitter.event;

  constructor(
    private readonly getStateForOriginal: (uri: vscode.Uri) => ViewState
  ) {}

  refreshAll(): void {
    const events: vscode.FileChangeEvent[] = [];
    for (const doc of vscode.workspace.textDocuments) {
      if (doc.uri.scheme === FILTERED_SCHEME) {
        events.push({ type: vscode.FileChangeType.Changed, uri: doc.uri });
      }
    }
    if (events.length > 0) this.emitter.fire(events);
  }

  watch(): vscode.Disposable {
    return new vscode.Disposable(() => {});
  }

  stat(): vscode.FileStat {
    return {
      type: vscode.FileType.File,
      ctime: 0,
      mtime: Date.now(),
      size: 0,
      permissions: vscode.FilePermission.Readonly
    };
  }

  readDirectory(): [string, vscode.FileType][] {
    return [];
  }

  createDirectory(): void {
    throw vscode.FileSystemError.NoPermissions();
  }

  async readFile(uri: vscode.Uri): Promise<Uint8Array> {
    const originalUri = toOriginalUri(uri);
    const original = await vscode.workspace.openTextDocument(originalUri);
    const { hidden, stripAnsi } = this.getStateForOriginal(originalUri);

    let text: string;
    if (hidden.size === 0) {
      text = original.getText();
    } else {
      const entries = getEntries(original);
      const lines: string[] = [];
      for (const entry of entries) {
        if (hidden.has(entry.level)) continue;
        for (let l = entry.startLine; l <= entry.endLine; l++) {
          lines.push(original.lineAt(l).text);
        }
      }
      text = lines.join("\n");
    }

    if (stripAnsi) {
      text = text.replace(ANSI_ESCAPE, "");
    }

    return ENCODER.encode(text);
  }

  writeFile(): void {
    throw vscode.FileSystemError.NoPermissions();
  }

  delete(): void {
    throw vscode.FileSystemError.NoPermissions();
  }

  rename(): void {
    throw vscode.FileSystemError.NoPermissions();
  }
}

async function closeTabsForUri(
  uri: vscode.Uri,
  column: vscode.ViewColumn | undefined
): Promise<void> {
  const uriString = uri.toString();
  const toClose: vscode.Tab[] = [];
  for (const group of vscode.window.tabGroups.all) {
    if (column !== undefined && group.viewColumn !== column) continue;
    for (const tab of group.tabs) {
      if (
        tab.input instanceof vscode.TabInputText &&
        tab.input.uri.toString() === uriString
      ) {
        toClose.push(tab);
      }
    }
  }
  if (toClose.length > 0) await vscode.window.tabGroups.close(toClose);
}

export async function switchToFiltered(
  editor: vscode.TextEditor
): Promise<vscode.TextEditor | undefined> {
  if (editor.document.uri.scheme === FILTERED_SCHEME) return editor;
  if (editor.document.languageId !== LANGUAGE_ID) return undefined;

  const originalUri = editor.document.uri;
  const column = editor.viewColumn;
  const filteredUri = toFilteredUri(originalUri);
  const next = await vscode.window.showTextDocument(filteredUri, {
    viewColumn: column,
    preview: false,
    preserveFocus: true
  });
  if (next.document.languageId !== LANGUAGE_ID) {
    await vscode.languages.setTextDocumentLanguage(next.document, LANGUAGE_ID);
  }
  await closeTabsForUri(originalUri, column);
  return next;
}

export async function switchToOriginal(
  editor: vscode.TextEditor
): Promise<vscode.TextEditor | undefined> {
  if (editor.document.uri.scheme !== FILTERED_SCHEME) return editor;
  const filteredUri = editor.document.uri;
  const column = editor.viewColumn;
  const originalUri = toOriginalUri(filteredUri);
  const next = await vscode.window.showTextDocument(originalUri, {
    viewColumn: column,
    preview: false,
    preserveFocus: true
  });
  await closeTabsForUri(filteredUri, column);
  return next;
}
