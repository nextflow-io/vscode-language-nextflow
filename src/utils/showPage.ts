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
  console.log("🟢 Showing page", path);
  const docUri = vscode.Uri.joinPath(extension.extensionUri, path);
  console.log("🟢 Doc URI", docUri);
  vscode.commands.executeCommand("markdown.showPreview", docUri);
}

export default showPage;
