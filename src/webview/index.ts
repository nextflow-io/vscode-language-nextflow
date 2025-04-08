import * as vscode from "vscode";
import WebviewProvider from "./WebviewProvider";
import { AuthProvider } from "../auth";

export function activateWebview(
  context: vscode.ExtensionContext,
  authProvider: AuthProvider
) {
  const workflowProvider = new WebviewProvider(context, "workflows");
  const processesProvider = new WebviewProvider(context, "processes");
  const userInfoProvider = new WebviewProvider(
    context,
    "userInfo",
    authProvider
  );

  const providers = [
    vscode.window.registerWebviewViewProvider("workflows", workflowProvider),
    vscode.window.registerWebviewViewProvider("processes", processesProvider),
    vscode.window.registerWebviewViewProvider("userInfo", userInfoProvider)
  ];

  providers.forEach((provider) => {
    context.subscriptions.push(provider);
  });

  vscode.commands.registerCommand("nextflow.seqera.reloadWebview", () => {
    userInfoProvider.reloadView();
    processesProvider.reloadView();
    workflowProvider.reloadView();
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
