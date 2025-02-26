import * as vscode from "vscode";
import { Panel } from "./Panel";

export class SidebarProvider implements vscode.WebviewViewProvider {
  constructor(private readonly _extensionUri: vscode.Uri) {}

  async resolveWebviewView(webviewView: vscode.WebviewView): Promise<void> {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [],
    };

    // Use the same HTML and styles as Panel
    webviewView.webview.html = Panel.generateWebviewContent();

    // Handle messages
    webviewView.webview.onDidReceiveMessage(async (message) => {
      switch (message.command) {
        case "generateTest":
          break;
      }
    });
  }
}
