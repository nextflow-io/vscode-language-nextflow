import * as vscode from "vscode";

function getReadme(): string {
  return vscode.env.appName.includes("Cursor")
    ? "readme-cursor.md"
    : "readme-vscode.md";
}

export function showPage(filename?: string) {
  const extension = vscode.extensions.getExtension("nextflow.nextflow");
  if (!extension) return;
  const path = filename ?? getReadme();
  const docUri = vscode.Uri.joinPath(extension.extensionUri, path);
  vscode.commands.executeCommand("markdown.showPreview", docUri);
}
