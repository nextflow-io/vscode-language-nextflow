import * as vscode from "vscode";

export function showPage(filename = "readme-vscode.md") {
  const extension = vscode.extensions.getExtension("nextflow.nextflow");
  if (!extension) {
    vscode.window.showErrorMessage("Extension not found!");
    return;
  }
  const docUri = vscode.Uri.joinPath(extension.extensionUri, "docs", filename);
  vscode.commands.executeCommand("markdown.showPreview", docUri);
}

export default showPage;
