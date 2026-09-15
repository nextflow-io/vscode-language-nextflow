import * as vscode from "vscode";
import { AuthProvider } from "../auth";
import ResourcesProvider from "./ResourcesProvider";
import WebviewProvider from "./WebviewProvider";
import { isNextflowFile } from "./utils";

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

  // The folder selector lives in the project view, but the Seqera Cloud view
  // shows folder-specific state too (e.g. the repository URL).
  projectProvider.onDidSelectFolder = (name) =>
    seqeraCloudProvider.setSelectedFolder(name);

  const refresh = (uris?: readonly vscode.Uri[]) => {
    if (uris === undefined || uris.some((uri) => isNextflowFile(uri.fsPath))) {
      projectProvider.initViewData();
    }
  };

  // Register views
  const providers = [
    // Keep the view alive while hidden, so switching back to it does not
    // remount the app and re-query the language server from an empty state.
    vscode.window.registerWebviewViewProvider("project", projectProvider, {
      webviewOptions: { retainContextWhenHidden: true }
    }),
    vscode.window.registerWebviewViewProvider(
      "seqeraCloud",
      seqeraCloudProvider
    ),
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
  vscode.workspace.onDidRenameFiles((e) =>
    refresh(e.files.map((r) => r.newUri))
  );
  vscode.workspace.onDidChangeWorkspaceFolders((_) => refresh());
  vscode.window.onDidChangeActiveTextEditor((_) =>
    projectProvider.postActiveFile()
  );

  return providers;
}
