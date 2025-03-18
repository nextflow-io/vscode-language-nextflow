import * as vscode from "vscode";
import WebviewProvider from "./webview";

export function activateWebview(context: vscode.ExtensionContext) {
  const workflowProvider = new WebviewProvider(context, "workflows");
  const processesProvider = new WebviewProvider(context, "processes");
  const userInfoProvider = new WebviewProvider(context, "userInfo");

  const providers = [
    vscode.window.registerWebviewViewProvider("workflows", workflowProvider),
    vscode.window.registerWebviewViewProvider("processes", processesProvider),
    vscode.window.registerWebviewViewProvider("userInfo", userInfoProvider)
  ];

  providers.forEach((provider) => {
    context.subscriptions.push(provider);
  });

  vscode.commands.registerCommand("nextflow.reloadWebView", () => {
    processesProvider.reloadView();
    workflowProvider.reloadView();
    // userInfoProvider.getAuthState();
  });

  vscode.workspace.onDidSaveTextDocument(() => {
    processesProvider.reloadView();
    workflowProvider.reloadView();
  });

  vscode.workspace.onDidChangeTextDocument((event) => {
    if (
      event.document.uri.fsPath.endsWith(".nf") ||
      event.document.uri.fsPath.endsWith(".nf.test")
    ) {
      processesProvider.reloadView();
      workflowProvider.reloadView();
    }
  });

  vscode.workspace.onDidDeleteFiles(() => {
    processesProvider.reloadView();
    workflowProvider.reloadView();
  });
}
