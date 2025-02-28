import * as vscode from "vscode";
import WebviewProvider from "./webview/Provider";

export function activateWebview(context: vscode.ExtensionContext) {
  const sidebarProvider = new WebviewProvider(context.extensionUri);

  const provider = vscode.window.registerWebviewViewProvider(
    "seqera",
    sidebarProvider
  );

  vscode.commands.registerCommand("nextflow.reloadWebView", () => {
    sidebarProvider.reloadView();
  });

  context.subscriptions.push(provider);
}
