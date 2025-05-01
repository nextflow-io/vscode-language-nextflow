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
  const projectProvider = new WebviewProvider(context, "project");
  const resourcesProvider = new ResourcesProvider();
  const seqeraCloudProvider = new WebviewProvider(
    context,
    "seqeraCloud",
    authProvider
  );
  
  const refresh = (uris?: readonly vscode.Uri[]) => {
    if (
      uris === undefined ||
      uris.some((uri) => isNextflowFile(uri.fsPath))
    ) {
      projectProvider.initViewData();
    }
  };

  // Register views
  const providers = [
    vscode.window.registerWebviewViewProvider("project", projectProvider),
    vscode.window.registerWebviewViewProvider("seqeraCloud", seqeraCloudProvider),
    vscode.window.registerTreeDataProvider("resources", resourcesProvider)
  ];

  providers.forEach((provider) => {
    context.subscriptions.push(provider);
  });

  // Register command
  vscode.commands.registerCommand("nextflow.seqera.reloadWebview", () => {
    seqeraCloudProvider.initViewData(true);
    refresh();
  });

  // Register events
  vscode.workspace.onDidSaveTextDocument((e) => refresh([e.uri]));
  vscode.workspace.onDidCreateFiles((e) => refresh(e.files));
  vscode.workspace.onDidDeleteFiles((e) => refresh(e.files));
  vscode.workspace.onDidRenameFiles((e) => refresh(e.files.map((r) => r.newUri)));
  vscode.workspace.onDidChangeWorkspaceFolders((_) => refresh());

  return providers;
}
