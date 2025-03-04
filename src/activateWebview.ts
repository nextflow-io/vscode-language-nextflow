import * as vscode from "vscode";
import WebviewProvider from "./webview";

export function activateWebview(context: vscode.ExtensionContext) {
  // Todo: optimize / de-dupe logic
  const workflowProvider = new WebviewProvider(
    context.extensionUri,
    "workflows"
  );
  const processesProvider = new WebviewProvider(
    context.extensionUri,
    "processes"
  );

  const provider = vscode.window.registerWebviewViewProvider(
    "workflows",
    workflowProvider
  );

  const provider2 = vscode.window.registerWebviewViewProvider(
    "processes",
    processesProvider
  );

  vscode.commands.registerCommand("nextflow.reloadWebView", () => {
    processesProvider.reloadView();
    workflowProvider.reloadView();
  });

  context.subscriptions.push(provider);
  context.subscriptions.push(provider2);
}
