import * as vscode from "vscode";

export type LogLevel = "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";

export const LOG_LEVELS: readonly LogLevel[] = [
  "TRACE",
  "DEBUG",
  "INFO",
  "WARN",
  "ERROR"
];

export interface LogEntry {
  level: LogLevel;
  startLine: number;
  endLine: number;
  levelStart: number;
  levelEnd: number;
}

const HEADER_RE =
  /^([A-Z][a-z]{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3} \[[^\]]+\] )(TRACE|DEBUG|INFO|WARN|ERROR) /;

export function parseEntries(document: vscode.TextDocument): LogEntry[] {
  const entries: LogEntry[] = [];
  let current: LogEntry | undefined;

  for (let line = 0; line < document.lineCount; line++) {
    const text = document.lineAt(line).text;
    const match = HEADER_RE.exec(text);
    if (match) {
      if (current) {
        current.endLine = line - 1;
        entries.push(current);
      }
      const levelStart = match[1].length;
      current = {
        level: match[2] as LogLevel,
        startLine: line,
        endLine: line,
        levelStart,
        levelEnd: levelStart + match[2].length
      };
    }
  }
  if (current) {
    current.endLine = document.lineCount - 1;
    entries.push(current);
  }
  return entries;
}

const cache = new WeakMap<
  vscode.TextDocument,
  { version: number; entries: LogEntry[] }
>();

export function getEntries(document: vscode.TextDocument): LogEntry[] {
  const hit = cache.get(document);
  if (hit && hit.version === document.version) {
    return hit.entries;
  }
  const entries = parseEntries(document);
  cache.set(document, { version: document.version, entries });
  return entries;
}

export function entryRange(entry: LogEntry, document: vscode.TextDocument): vscode.Range {
  const end = document.lineAt(entry.endLine).range.end;
  return new vscode.Range(entry.startLine, 0, end.line, end.character);
}
