import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import {
  buildList,
  buildTree,
  fetchPlatformData,
  fetchHistory,
  getRepoInfo
} from "./lib";
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
    await this.initViewData();

    view.webview.onDidReceiveMessage((message) => {
      switch (message.command) {
        case "openFile":
          this.openFile(message.file);
          break;
        case "openChat":
          this.openChat();
          break;
        case "login":
          this.login();
          break;
        case "refresh":
          this.initViewData(true);
          break;
        case "fetchHistory":
          this.fetchHistory(message.workspaceId);
          break;
      }
    });

    view.onDidChangeVisibility(() => {
      if (!view.visible) return;
      this.initViewData();
    });
  }

  private async login() {
    await vscode.commands.executeCommand("nextflow.seqera.login");
  }

  private async fetchHistory(workspaceId: number) {
    const accessToken = await getAccessToken(this._context);
    if (!accessToken) return;
    const history = await fetchHistory(accessToken, workspaceId);
    this._currentView?.webview.postMessage({
      viewID: this.viewID,
      command: "history",
      history
    });
  }

  public async initViewData(refresh?: boolean) {
    const { viewID, _context, _currentView: view } = this;
    if (!view) return;
    if (viewID === "userInfo") {
      const accessToken = await getAccessToken(_context);
      if (!accessToken) return;
      await fetchPlatformData(accessToken, view.webview, _context, refresh);
      setTimeout(async () => {
        const repoInfo = await getRepoInfo();
        view.webview.postMessage({
          repoInfo
        });
      }, 1000);
    } else {
      const fileList = buildList();
      view.webview.postMessage({
        fileList,
        tree: buildTree(fileList.files)
      });
    }
  }

  public async reloadView() {
    if (!this._currentView) return;
    const html = this.getBuiltHTML(this._currentView);
    this._currentView.webview.html = html;
    await this.initViewData(true);
  }

  public async openFileEvent(filePath: string) {
    this._currentView?.webview.postMessage({
      command: "fileOpened",
      filePath
    });
  }

  private async openFile(file: FileNode) {
    const doc = await vscode.workspace.openTextDocument(file.filePath);
    await vscode.window.showTextDocument(doc, {
      selection: new vscode.Range(file.line || 0, 0, file.line || 0, 0)
    });
    this.openFileEvent(file.filePath);
  }

  private async openChat() {
    await vscode.commands.executeCommand("nextflow.openChat");
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
    const isCursor = vscode.env.appName.includes("Cursor");
    const distUri = this.getBuildPath();
    let html = fs.readFileSync(path.join(distUri.fsPath, "index.html"), "utf8");

    html = html.replace(
      "</head>",
      `<script>window.initialData = { viewID: "${this.viewID}", isCursor: ${isCursor} };</script></head>`
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
