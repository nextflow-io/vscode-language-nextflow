import * as vscode from "vscode";
import WebviewProvider from "./WebviewProvider";
import { AuthProvider } from "../auth";
export { default as ResourcesProvider } from "./ResourcesProvider";
export { default as HistoryProvider } from "./HistoryProvider";

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
    userInfoProvider.initViewData(true);
    processesProvider.initViewData();
    workflowProvider.initViewData();
  });

  // Workspace events

  vscode.workspace.onDidSaveTextDocument(() => {
    processesProvider.initViewData();
    workflowProvider.initViewData();
  });

  vscode.workspace.onDidOpenTextDocument((document) => {
    if (
      document.uri.fsPath.endsWith(".nf") ||
      document.uri.fsPath.endsWith(".nf.test")
    ) {
      workflowProvider.openFileEvent(document.uri.fsPath);
    }
  });

  vscode.workspace.onDidCreateFiles(() => {
    processesProvider.initViewData();
    workflowProvider.initViewData();
  });

  vscode.workspace.onDidDeleteFiles(() => {
    processesProvider.initViewData();
    workflowProvider.initViewData();
  });

  vscode.workspace.onDidRenameFiles(() => {
    processesProvider.initViewData();
    workflowProvider.initViewData();
  });

  vscode.workspace.onDidChangeWorkspaceFolders(() => {
    processesProvider.initViewData();
    workflowProvider.initViewData();
  });

  vscode.workspace.onDidChangeTextDocument((event) => {
    if (
      event.document.uri.fsPath.endsWith(".nf") ||
      event.document.uri.fsPath.endsWith(".nf.test")
    ) {
      processesProvider.initViewData();
      workflowProvider.initViewData();
    }
  });
}
