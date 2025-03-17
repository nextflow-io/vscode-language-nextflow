import * as vscode from "vscode";

function getWelcomePage(): string {
  return vscode.env.appName.includes("Cursor")
    ? "welcome-cursor.md"
    : "welcome-vscode.md";
}

function showPage(filename?: string) {
  const extension = vscode.extensions.getExtension("nextflow.nextflow");
  if (!extension) return;
  const path = filename ?? getWelcomePage();
  const docUri = vscode.Uri.joinPath(extension.extensionUri, path);
  vscode.commands.executeCommand("markdown.showPreview", docUri);
}

export function activateWelcomePage(context: vscode.ExtensionContext) {
  // Add command to show welcome page
  const showWelcomePage = vscode.commands.registerCommand(
    "nextflow.showWelcomePage",
    showPage
  );
  context.subscriptions.push(showWelcomePage);

  // Show welcome page on installation of new version
  const versionKey = "nextflow.version";
  const currentVersion = context.extension.packageJSON.version ?? "unknown";
  const storedVersion = context.globalState.get<string>(versionKey, "");
  if (currentVersion !== storedVersion) {
    context.globalState.update(versionKey, currentVersion);
    showPage();
  }
}
