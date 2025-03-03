import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import { buildPipelineTree } from "./utils/buildTree";

class Provider implements vscode.WebviewViewProvider {
  private _currentView?: vscode.WebviewView;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public async resolveWebviewView(view: vscode.WebviewView): Promise<void> {
    this.initializeView(view);
    await this.initViewData(view);

    view.webview.onDidReceiveMessage((message) => {
      console.log("🟣 message:", message);

      switch (message.command) {
        case "openFile":
          this.openFile(message.filePath);
          break;
      }
    });
  }

  private async initViewData(view: vscode.WebviewView) {
    const pipelineTree = await buildPipelineTree();

    view.webview.postMessage({
      command: "findFiles",
      data: pipelineTree
    });
  }

  private initializeView(view: vscode.WebviewView) {
    this._currentView = view;

    const distUri = this.getWebviewDistUri();

    view.webview.options = {
      enableScripts: true,
      localResourceRoots: [distUri]
    };

    const html = this.getWebviewHtml(view);
    view.webview.html = html;
  }

  public async reloadView() {
    if (!this._currentView) return;
    const html = this.getWebviewHtml(this._currentView);
    this._currentView.webview.html = html;
    await this.initViewData(this._currentView);
  }

  private getWebviewDistUri() {
    return vscode.Uri.joinPath(this._extensionUri, "..", "webview-ui", "dist");
  }

  private getWebviewHtml(view: vscode.WebviewView) {
    const distUri = this.getWebviewDistUri();
    let html = fs.readFileSync(path.join(distUri.fsPath, "index.html"), "utf8");
    html = updateRefs(html, view.webview, distUri);
    return html;
  }

  private async openFile(filePath: string) {
    console.log("🟣 openFile:", filePath);
    const doc = await vscode.workspace.openTextDocument(filePath);
    vscode.window.showTextDocument(doc);
  }
}

const updateRefs = (
  html: string,
  webview: vscode.Webview,
  distUri: vscode.Uri
): string =>
  html.replace(
    /((src|href)=["'])(\.\/|\/)?assets\//g,
    `$1${webview.asWebviewUri(vscode.Uri.joinPath(distUri, "assets"))}/`
  );

export default Provider;
