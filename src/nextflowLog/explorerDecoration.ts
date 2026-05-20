import * as vscode from "vscode";

import { NEXTFLOW_LOG_GLOB, NEXTFLOW_LOG_PATH_RE } from "./constants";

const HEADER_RE =
  /^[A-Z][a-z]{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3} \[[^\]]+\] (TRACE|DEBUG|INFO|WARN|ERROR) /gm;

const DECODER = new TextDecoder("utf-8");

interface ScanResult {
  errors: number;
  warnings: number;
  mtime: number;
}

function pluralize(n: number, singular: string): string {
  return `${n} ${singular}${n === 1 ? "" : "s"}`;
}

class NextflowLogFileDecorationProvider
  implements vscode.FileDecorationProvider
{
  private readonly emitter = new vscode.EventEmitter<
    vscode.Uri | vscode.Uri[]
  >();
  readonly onDidChangeFileDecorations = this.emitter.event;

  private readonly cache = new Map<string, ScanResult>();

  invalidate(uri: vscode.Uri): void {
    this.cache.delete(uri.toString());
    this.emitter.fire(uri);
  }

  async provideFileDecoration(
    uri: vscode.Uri
  ): Promise<vscode.FileDecoration | undefined> {
    if (!NEXTFLOW_LOG_PATH_RE.test(uri.path)) return undefined;

    let stat: vscode.FileStat;
    try {
      stat = await vscode.workspace.fs.stat(uri);
    } catch {
      return undefined;
    }

    const key = uri.toString();
    const cached = this.cache.get(key);
    let result: ScanResult | undefined =
      cached && cached.mtime === stat.mtime ? cached : undefined;
    if (!result) {
      result = await this.scan(uri, stat.mtime);
      if (!result) return undefined;
      this.cache.set(key, result);
    }

    if (result.errors > 0) {
      const errors = pluralize(result.errors, "error");
      const warnings =
        result.warnings > 0 ? `, ${pluralize(result.warnings, "warning")}` : "";
      return {
        badge: "E",
        color: new vscode.ThemeColor("editorError.foreground"),
        tooltip: `${errors}${warnings}`
      };
    }
    if (result.warnings > 0) {
      return {
        badge: "W",
        color: new vscode.ThemeColor("editorWarning.foreground"),
        tooltip: pluralize(result.warnings, "warning")
      };
    }
    return undefined;
  }

  private async scan(
    uri: vscode.Uri,
    mtime: number
  ): Promise<ScanResult | undefined> {
    let text: string;
    try {
      const bytes = await vscode.workspace.fs.readFile(uri);
      text = DECODER.decode(bytes);
    } catch {
      return undefined;
    }
    let errors = 0;
    let warnings = 0;
    HEADER_RE.lastIndex = 0;
    for (const match of text.matchAll(HEADER_RE)) {
      if (match[1] === "ERROR") errors++;
      else if (match[1] === "WARN") warnings++;
    }
    return { errors, warnings, mtime };
  }
}

export function activateExplorerDecoration(
  context: vscode.ExtensionContext
): void {
  const provider = new NextflowLogFileDecorationProvider();
  context.subscriptions.push(
    vscode.window.registerFileDecorationProvider(provider)
  );

  const watcher = vscode.workspace.createFileSystemWatcher(NEXTFLOW_LOG_GLOB);
  context.subscriptions.push(
    watcher,
    watcher.onDidChange((uri) => provider.invalidate(uri)),
    watcher.onDidCreate((uri) => provider.invalidate(uri)),
    watcher.onDidDelete((uri) => provider.invalidate(uri))
  );
}
