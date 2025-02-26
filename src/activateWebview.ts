import * as vscode from "vscode";
import { SidebarProvider } from "./webview/SidebarProvider";

export function activateWebview(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarProvider(context.extensionUri);

  const provider = vscode.window.registerWebviewViewProvider(
    "seqera",
    sidebarProvider
  );

  context.subscriptions.push(provider);
}
