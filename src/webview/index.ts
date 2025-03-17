import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import { FileNode } from "./types";
import buildTree from "./utils/buildTree";
import fetchUserInfo from "../auth/requests/fetchUserInfo";

class Provider implements vscode.WebviewViewProvider {
  private _currentView?: vscode.WebviewView;

  constructor(
    private readonly _extensionUri: vscode.Uri,
    private readonly _type: "workflows" | "processes" | "userInfo"
  ) {}

  public async resolveWebviewView(view: vscode.WebviewView): Promise<void> {
    this.initializeView(view);
    await this.initViewData(view);

    view.webview.onDidReceiveMessage((message) => {
      switch (message.command) {
        case "openFile":
          this.openFile(message.file);
          break;
        case "login":
          this.login();
          break;
        case "fetchUserInfo":
          fetchUserInfo(message.token);
          break;
      }
    });

    view.onDidChangeVisibility(() => {
      if (!view.visible) return;

      this.initViewData(view);
    });
  }

  private async login() {
    await vscode.commands.executeCommand("nextflow.login");
  }

  private async initViewData(view: vscode.WebviewView) {
    let fileTree = {};
    if (["workflows", "processes"].includes(this._type)) {
      fileTree = await buildTree();
    }

    const session = await vscode.authentication.getSession("auth0", []);

    view.webview.postMessage({
      command: "setViewData",
      fileTree,
      viewType: this._type,
      session
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
    console.log("🟣 reloadView", this._currentView);
    if (!this._currentView) return;
    const html = this.getWebviewHtml(this._currentView);
    this._currentView.webview.html = html;
    await this.initViewData(this._currentView);
  }

  private getWebviewDistUri() {
    return vscode.Uri.joinPath(this._extensionUri, "webview-ui", "dist");
  }

  private getWebviewHtml(view: vscode.WebviewView) {
    const distUri = this.getWebviewDistUri();
    let html = fs.readFileSync(path.join(distUri.fsPath, "index.html"), "utf8");
    html = updateRefs(html, view.webview, distUri);
    return html;
  }

  private async openFile(file: FileNode) {
    const doc = await vscode.workspace.openTextDocument(file.filePath);
    await vscode.window.showTextDocument(doc, {
      selection: new vscode.Range(file.line || 0, 0, file.line || 0, 0)
    });
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
