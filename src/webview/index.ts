import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import buildTree from "./utils/buildTree";
import { fetchUserInfo, fetchWorkspaces, fetchComputeEnvs } from "../tower";

import { FileNode } from "./types";
import { AuthenticationSession } from "vscode";
import { STORAGE_KEY_NAME } from "../auth/AuthProvider";
import jwtExpired from "../auth/utils/jwtExpired";
import { jwtDecode } from "jwt-decode";
class Provider implements vscode.WebviewViewProvider {
  private _currentView?: vscode.WebviewView;
  private _extensionUri: vscode.Uri;

  constructor(
    private readonly _context: vscode.ExtensionContext,
    private readonly _type: "workflows" | "processes" | "userInfo"
  ) {
    this._extensionUri = _context.extensionUri;
  }

  public async resolveWebviewView(view: vscode.WebviewView): Promise<void> {
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
        case "fetchTowerData":
          this.fetchTowerData();
          break;
        case "getAuthState":
          this.getAuthState();
          break;
      }
    });

    view.onDidChangeVisibility(() => {
      if (!view.visible) return;
      this.initViewData(view);
    });
  }

  private async getAccessToken(): Promise<string | null> {
    const sessionsStr = await this._context.secrets.get(STORAGE_KEY_NAME);
    const sessions = sessionsStr ? JSON.parse(sessionsStr) : [];
    const session = sessions[0] as AuthenticationSession;
    const token = session?.accessToken;
    return token;
  }

  public async fetchTowerData(): Promise<any> {
    const token = await this.getAccessToken();
    console.log("🟣 fetchTowerData", token);
    if (!token) {
      throw new Error("No token found");
    }
    const userInfo = await fetchUserInfo(token);
    if (!userInfo) {
      throw new Error("Could not fetch user info");
    }
    const workspaces = await fetchWorkspaces(token, userInfo.user.id);
    const computeEnvs = await fetchComputeEnvs(token, userInfo.user.id);
    const towerData = {
      userInfo,
      workspaces,
      computeEnvs
    };
    this._currentView?.webview.postMessage({
      command: "setTowerData",
      viewID: this._type,
      towerData
    });
  }

  private async login() {
    await vscode.commands.executeCommand("nextflow.login");
  }

  private async getAuthState(): Promise<{
    hasToken: boolean;
    tokenExpired: boolean;
    tokenExpiry: number;
    isAuthenticated: boolean;
  }> {
    const token = await this.getAccessToken();
    const hasToken = !!token;
    let tokenExpired = false;
    let tokenExpiry: any = 0;
    if (hasToken) {
      const decoded = jwtDecode(token);
      tokenExpiry = decoded.exp;
      tokenExpired = jwtExpired(token);
    }
    const isAuthenticated = hasToken && !tokenExpired;
    console.log("🟣 getAuthState", {
      hasToken,
      tokenExpired,
      tokenExpiry,
      isAuthenticated
    });
    this._currentView?.webview.postMessage({
      viewID: this._type,
      authState: {
        hasToken,
        tokenExpired,
        tokenExpiry,
        isAuthenticated
      }
    });
    return { hasToken, tokenExpired, tokenExpiry, isAuthenticated };
  }

  private async initViewData(view: vscode.WebviewView) {
    let fileTree;
    if (["workflows", "processes"].includes(this._type)) {
      fileTree = await buildTree();
    }
    view.webview.postMessage({
      command: "setViewData",
      viewID: this._type,
      fileTree
    });

    const { isAuthenticated } = await this.getAuthState();

    if (this._type === "userInfo") {
      if (!isAuthenticated) return;
      await this.fetchTowerData();
    }
  }

  public async reloadView() {
    console.log("🟣 reloadView", this._currentView);
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

export default Provider;
