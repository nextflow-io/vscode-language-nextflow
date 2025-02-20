import * as vscode from "vscode";

export function showPage(filename = "readme-cursor.md") {
  const extension = vscode.extensions.getExtension("nextflow.nextflow");

  if (!extension) {
    vscode.window.showErrorMessage("Extension not found!");
    return;
  }

  const docUri = vscode.Uri.joinPath(extension.extensionUri, "src", filename);

  vscode.commands.executeCommand("markdown.showPreview", docUri);
}

export default showPage;
