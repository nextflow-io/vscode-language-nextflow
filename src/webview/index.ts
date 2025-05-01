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
  const modulesProvider = new WebviewProvider(context, "modules");
  const userInfoProvider = new WebviewProvider(
    context,
    "userInfo",
    authProvider
  );
  const resourcesProvider = new ResourcesProvider();

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
    vscode.window.registerWebviewViewProvider("modules", modulesProvider),
    vscode.window.registerWebviewViewProvider("userInfo", userInfoProvider),
    vscode.window.registerTreeDataProvider("resources", resourcesProvider)
  ];

  providers.forEach((provider) => {
    context.subscriptions.push(provider);
  });

  // Register command
  vscode.commands.registerCommand("nextflow.seqera.reloadWebview", () => {
    refresh();
    modulesProvider.initViewData();
    userInfoProvider.initViewData(true);
  });

  // Register events
  vscode.workspace.onDidSaveTextDocument((e) => refresh([e.uri]));
  vscode.workspace.onDidCreateFiles((e) => refresh(e.files));
  vscode.workspace.onDidDeleteFiles((e) => refresh(e.files));
  vscode.workspace.onDidRenameFiles((e) => refresh(e.files.map((r) => r.newUri)));
  vscode.workspace.onDidChangeWorkspaceFolders((_) => refresh());

  return providers;
}
