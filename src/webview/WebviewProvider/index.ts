import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import {
  createTest,
  fetchComputeEnvs,
  fetchDataLinks,
  fetchDatasets,
  fetchPipelines,
  fetchPlatformData,
  fetchRuns,
  getRepoInfo,
  queryWorkspace,
  getContainer
} from "./lib";
import { AuthProvider, getAccessToken } from "../../auth";
import { jwtExpired } from "../../auth/AuthProvider/utils/jwt";
import { sleep } from "./lib/utils";

class WebviewProvider implements vscode.WebviewViewProvider {
  _currentView?: vscode.WebviewView;
  private _extensionUri: vscode.Uri;

  constructor(
    private readonly _context: vscode.ExtensionContext,
    private readonly viewID: "project" | "seqeraCloud",
    private readonly _authProvider?: AuthProvider
  ) {
    this._extensionUri = _context.extensionUri;
  }

  public async resolveWebviewView(view: vscode.WebviewView): Promise<void> {
    this._authProvider?.setWebview(view.webview);
    this.initHTML(view);

    view.webview.onDidReceiveMessage((message) => {
      const { command, workspaceId, repository } = message;
      switch (command) {
        case "openFile":
          this.openFile(message.path, message.line);
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
        case "getRepoInfo":
          this.getRepoInfo();
          break;
        case "fetchRuns":
          if (!workspaceId) return;
          this.fetchRuns(workspaceId);
          break;
        case "fetchPipelines":
          if (!workspaceId) return;
          this.fetchPipelines(workspaceId);
          break;
        case "fetchDatasets":
          if (!workspaceId) return;
          this.fetchDatasets(workspaceId);
          break;
        case "fetchDataLinks":
          if (!workspaceId) return;
          this.fetchDataLinks(workspaceId);
          break;
        case "fetchComputeEnvs":
          if (!workspaceId) return;
          this.fetchComputeEnvs(workspaceId);
        case "createTest":
          this.createTest(message.filePath);
          break;
        case "getContainer":
          this.getContainer(message.filePath);
          break;
      }
    });

    view.onDidChangeVisibility(() => {
      if (!view.visible) return;
      this.initViewData();
    });

    await sleep(100); // Wait for the app to mount
    await this.initViewData();
  }

  private async login() {
    await vscode.commands.executeCommand("nextflow.seqera.login");
  }

  private async getAccessToken(): Promise<string | undefined> {
    const accessToken = await getAccessToken(this._context);
    const expired = jwtExpired(accessToken);
    return expired ? undefined : accessToken;
  }

  private async fetchRuns(workspaceId: number) {
    const accessToken = await this.getAccessToken();
    if (!accessToken) return;
    const runs = await fetchRuns(accessToken, workspaceId);
    this._currentView?.webview.postMessage({
      runs
    });
  }

  private async getRepoInfo() {
    const repoInfo = await getRepoInfo(this._context);
    this._currentView?.webview.postMessage({
      repoInfo
    });
  }

  private async fetchPipelines(workspaceId: number) {
    const accessToken = await this.getAccessToken();
    if (!accessToken) return;
    const pipelines = await fetchPipelines(accessToken, workspaceId);
    this._currentView?.webview.postMessage({
      pipelines
    });
  }

  private async fetchDatasets(workspaceId: number) {
    const accessToken = await this.getAccessToken();
    if (!accessToken) return;
    const datasets = await fetchDatasets(accessToken, workspaceId);
    this._currentView?.webview.postMessage({
      datasets
    });
  }

  private async fetchDataLinks(workspaceId: number) {
    const accessToken = await this.getAccessToken();
    if (!accessToken) return;
    const dataLinks = await fetchDataLinks(accessToken, workspaceId);
    this._currentView?.webview.postMessage({
      dataLinks
    });
  }

  private async fetchComputeEnvs(workspaceId: number) {
    const accessToken = await this.getAccessToken();
    if (!accessToken) return;
    const computeEnvs = await fetchComputeEnvs(accessToken, workspaceId);
    this._currentView?.webview.postMessage({
      computeEnvs
    });
  }

  public async initViewData(refresh?: boolean) {
    const { viewID, _context, _currentView: view } = this;
    console.log("🟠 initViewData", viewID);
    if (!view) return;
    if (viewID === "seqeraCloud") {
      this.getRepoInfo();
      const accessToken = await this.getAccessToken();
      if (!accessToken) return;
      await fetchPlatformData(accessToken, view.webview, _context, refresh);
    }
    if (viewID === "project") {
      const nodes = await queryWorkspace();
      view.webview.postMessage({ nodes });
    }
  }

  private async emitTestCreated(filePath: string, successful: boolean) {
    this._currentView?.webview.postMessage({
      testCreated: {
        filePath,
        successful
      }
    });
  }

  private async createTest(filePath: string) {
    const accessToken = await getAccessToken(this._context);

    try {
      const created = await createTest(filePath, accessToken);
      this.emitTestCreated(filePath, created);
    } catch (error) {
      console.log("🟠 Test creation failed", error);
      this.emitTestCreated(filePath, false);
    }
  }

  private async emitContainerCreated(filePath: string, successful: boolean) {
    this._currentView?.webview.postMessage({
      containerCreated: {
        filePath,
        successful
      }
    });
  }

  private async getContainer(filePath: string) {
    const accessToken = await getAccessToken(this._context);

    try {
      const created = await getContainer(filePath, accessToken);
      this.emitContainerCreated(filePath, created);
    } catch (error) {
      console.log("🟠 Container creation failed", error);
      this.emitContainerCreated(filePath, false);
    }
  }

  private async openFile(filePath: string, line: number) {
    const doc = await vscode.workspace.openTextDocument(filePath);
    await vscode.window.showTextDocument(doc, {
      selection: line != -1 ? new vscode.Range(line, 0, line, 0) : undefined
    });
  }

  private async openChat() {
    await vscode.commands.executeCommand("nextflow.chatbot.openChat");
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
