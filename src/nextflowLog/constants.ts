import * as vscode from "vscode";

export const LANGUAGE_ID = "nextflow-log";
export const FILTERED_SCHEME = "nextflow-log-filtered";

export const NEXTFLOW_LOG_GLOB = "**/.nextflow.log*";
export const NEXTFLOW_LOG_PATH_RE = /(^|\/)\.nextflow\.log(\.[^/]+)?$/;

export function isNextflowLogEditor(editor: vscode.TextEditor): boolean {
  return (
    editor.document.languageId === LANGUAGE_ID ||
    editor.document.uri.scheme === FILTERED_SCHEME
  );
}
