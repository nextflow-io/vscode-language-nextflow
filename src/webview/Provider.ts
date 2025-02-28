import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import getNonce from "./utils/getNonce";
import updateRefs from "./utils/updateRefs";

interface PipelineFile {
  filePath: string;
  processes: string[];
  includes: string[];
}

class Provider implements vscode.WebviewViewProvider {
  private _currentView?: vscode.WebviewView;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public async resolveWebviewView(view: vscode.WebviewView): Promise<void> {
    const distUri = this.getWebviewDistUri();

    view.webview.options = {
      enableScripts: true,
      localResourceRoots: [distUri]
    };

    this._currentView = view;

    const html = this.getWebviewHtml(view);
    view.webview.html = html;

    const pipelineTree = await this.buildPipelineTree();

    // 5) Optionally, post data to React or handle messages, etc.
    view.webview.postMessage({
      command: "initPipelineTree",
      data: pipelineTree
    });

    view.webview.onDidReceiveMessage((message) => {
      // handle messages from React
    });
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

  public reloadView() {
    if (!this._currentView) return;
    const html = this.getWebviewHtml(this._currentView);
    this._currentView.webview.html = html;
  }

  /**
   * Builds a simple pipeline tree by scanning for .nf files, includes, and processes.
   */
  private async buildPipelineTree(): Promise<PipelineFile[]> {
    const pipelineFiles: PipelineFile[] = [];

    // Get the first workspace folder
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) {
      return pipelineFiles; // No workspace open
    }
    const rootPath = workspaceFolders[0].uri.fsPath;

    // Find all .nf files in the workspace (simple approach)
    const nfFiles = await this.findNfFiles(rootPath);

    // For each .nf file, parse includes and processes
    for (const nfFile of nfFiles) {
      const content = fs.readFileSync(nfFile, "utf8");
      const includes = this.parseIncludes(content);
      const processes = this.parseProcesses(content);
      pipelineFiles.push({
        filePath: nfFile,
        processes,
        includes
      });
    }

    // Return the scanned structure
    return pipelineFiles;
  }

  /**
   * Recursively find .nf files in the workspace folder.
   */
  private async findNfFiles(dir: string): Promise<string[]> {
    const result: string[] = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // Exclude node_modules or other folders if necessary
        if (entry.name === "node_modules") continue;
        result.push(...(await this.findNfFiles(entryPath)));
      } else if (entry.isFile() && entry.name.endsWith(".nf")) {
        result.push(entryPath);
      }
    }
    return result;
  }

  /**
   * Naively parse includes from a file's content.
   * You may need to refine this regex or approach for your actual usage.
   */
  private parseIncludes(content: string): string[] {
    const regex = /^\s*include\s+([\w\/.]+)/gm;
    const result: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = regex.exec(content)) !== null) {
      result.push(match[1]);
    }
    return result;
  }

  /**
   * Naively parse processes from a file's content.
   * You can enhance this to match DSL2 syntax or other Nextflow quirks.
   */
  private parseProcesses(content: string): string[] {
    const regex = /^\s*process\s+(\w+)/gm;
    const result: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = regex.exec(content)) !== null) {
      result.push(match[1]);
    }
    return result;
  }

  /**
   * Optionally open a file in the editor if requested from the webview.
   */
  private async openFileInEditor(filePath: string) {
    const doc = await vscode.workspace.openTextDocument(filePath);
    vscode.window.showTextDocument(doc);
  }
}

export default Provider;
