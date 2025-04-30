import * as vscode from "vscode";
import { AuthProvider } from "../auth";
import ResourcesProvider from "./ResourcesProvider";
import WebviewProvider from "./WebviewProvider";

function isNextflowFile(filePath: string) {
  return filePath.endsWith(".nf") || filePath.endsWith(".nf.test");
}

export function activateWebview(
  context: vscode.ExtensionContext,
  authProvider: AuthProvider
) {
  const resourcesProvider = new ResourcesProvider();
  const workflowProvider = new WebviewProvider(context, "workflows");
  const processesProvider = new WebviewProvider(context, "processes");
  const userInfoProvider = new WebviewProvider(
    context,
    "userInfo",
    authProvider
  );
  
  const refresh = (uris?: readonly vscode.Uri[]) => {
    if (
      uris === undefined ||
      uris.some((uri) => isNextflowFile(uri.fsPath))
    ) {
      processesProvider.initViewData();
      workflowProvider.initViewData();
    }
  };

  // Register views
  const providers = [
    vscode.window.registerWebviewViewProvider("workflows", workflowProvider),
    vscode.window.registerWebviewViewProvider("processes", processesProvider),
    vscode.window.registerWebviewViewProvider("userInfo", userInfoProvider),
    vscode.window.registerTreeDataProvider("resources", resourcesProvider)
  ];

  providers.forEach((provider) => {
    context.subscriptions.push(provider);
  });

  // Register command
  vscode.commands.registerCommand("nextflow.seqera.reloadWebview", () => {
    userInfoProvider.initViewData(true);
    refresh();
  });

  // Register events
  vscode.workspace.onDidSaveTextDocument((e) => refresh([e.uri]));
  vscode.workspace.onDidOpenTextDocument((document) => {
    const filePath = document.uri.fsPath;
    if (isNextflowFile(filePath)) {
      workflowProvider.openFileEvent(filePath);
    }
  });
  vscode.workspace.onDidCreateFiles((e) => refresh(e.files));
  vscode.workspace.onDidDeleteFiles((e) => refresh(e.files));
  vscode.workspace.onDidRenameFiles((e) => refresh(e.files.map((r) => r.newUri)));
  vscode.workspace.onDidChangeWorkspaceFolders((_) => refresh());

  return providers;
}
