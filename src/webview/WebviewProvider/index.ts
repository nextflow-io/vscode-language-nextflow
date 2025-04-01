import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import { buildTree, fetchPlatformData } from "./lib";
import { AuthProvider, getAccessToken } from "../../auth";
import { FileNode } from "./lib/workspace/types";

class WebviewProvider implements vscode.WebviewViewProvider {
  _currentView?: vscode.WebviewView;
  private _extensionUri: vscode.Uri;

  constructor(
    private readonly _context: vscode.ExtensionContext,
    private readonly viewID: "workflows" | "processes" | "userInfo",
    private readonly _authProvider?: AuthProvider
  ) {
    this._extensionUri = _context.extensionUri;
  }

  public async resolveWebviewView(view: vscode.WebviewView): Promise<void> {
    this._authProvider?.setWebview(view.webview);
    this.initHTML(view);
    await this.initViewData(view);

    view.webview.onDidReceiveMessage((message) => {
      switch (message.command) {
        case "openFile":
          this.openFile(message.file);
          break;
        case "login":
          this.login();
          break;
        case "refresh":
          this.initViewData(view, true);
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

  private async initViewData(view: vscode.WebviewView, refresh?: boolean) {
    const { viewID, _currentView, _context } = this;
    if (viewID === "userInfo") {
      const accessToken = await getAccessToken(_context);
      if (!accessToken) return;
      if (!_currentView) return;
      await fetchPlatformData(
        accessToken,
        viewID,
        _currentView.webview,
        _context,
        refresh
      );
    } else {
      view.webview.postMessage({
        viewID,
        fileTree: await buildTree()
      });
    }
  }

  public async reloadView() {
    if (!this._currentView) return;
    const html = this.getBuiltHTML(this._currentView);
    this._currentView.webview.html = html;
    await this.initViewData(this._currentView);
  }

  private async openFile(file: FileNode) {
    const doc = await vscode.workspace.openTextDocument(file.filePath);
    await vscode.window.showTextDocument(doc, {
      selection: new vscode.Range(file.line || 0, 0, file.line || 0, 0)
    });
  }

  private initHTML(view: vscode.WebviewView) {
    this._currentView = view;

    const buildPath = this.getBuildPath();
    const builtHTML = this.getBuiltHTML(view);

    view.webview.options = {
      enableScripts: true,
      localResourceRoots: [buildPath]
    };

    view.webview.html = builtHTML;
  }

  private getBuildPath() {
    return vscode.Uri.joinPath(this._extensionUri, "webview-ui", "dist");
  }

  private getBuiltHTML(view: vscode.WebviewView) {
    const distUri = this.getBuildPath();
    let html = fs.readFileSync(path.join(distUri.fsPath, "index.html"), "utf8");

    html = html.replace(
      "</head>",
      `<script>window.initialData = { viewID: "${this.viewID}" };</script></head>`
    );

    html = updateRefs(html, view.webview, distUri);
    return html;
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

export default WebviewProvider;
