import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { getNonce } from "./getNonce";

interface PipelineFile {
  filePath: string;
  processes: string[];
  includes: string[];
}

class Provider implements vscode.WebviewViewProvider {
  constructor(private readonly _extensionUri: vscode.Uri) {}

  /**
   * Entry point for the webview.
   */
  public async resolveWebviewView(
    webviewView: vscode.WebviewView
  ): Promise<void> {
    // 1) Allow webview to load local resources only from the dist folder
    // (adjust to your actual dist path)
    const distUri = vscode.Uri.joinPath(this._extensionUri, "..", "webview-ui", "dist");
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [distUri],
    };

    const pipelineTree = await this.buildPipelineTree();

    // 2) Read the index.html from dist
    const indexHtmlPath = path.join(distUri.fsPath, "index.html");
    let html = fs.readFileSync(indexHtmlPath, "utf8");

    // 3) Fix up resource references. 
    //    The React build might reference "./assets/..." or similar,
    //    so we convert them to the proper webview URIs:
    html = this.updateRefs(html, webviewView.webview, distUri);

    // 4) Set the webview's HTML content
    webviewView.webview.html = html;

    // 5) Optionally, post data to React or handle messages, etc.
    webviewView.webview.postMessage({ command: "initPipelineTree", data: pipelineTree });

    webviewView.webview.onDidReceiveMessage((message) => {
      // handle messages from React
    });
  }

  /**
   * Helper to rewrite local paths (like /assets/*) to vscode-resource URIs
   * so the webview can load them.
   */
  private updateRefs(
    html: string,
    webview: vscode.Webview,
    distUri: vscode.Uri
  ): string {
    // Example: find all src/href references in the HTML that start with
    // something like "./assets" or "/assets", and replace them with webview URIs.
    // The exact pattern depends on how your build outputs references.
    const pth = html.replace(
      /((src|href)=["'])(\.\/|\/)?assets\//g,
      `$1${webview.asWebviewUri(vscode.Uri.joinPath(distUri, "assets"))}/`
    );
    console.log("🟣 path:", pth);
    return pth;
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
        includes,
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

  /**
   * The existing method that sets our webview content.
   */
  private getWebviewContent(
    styleResetUri: vscode.Uri,
    styleVSCodeUri: vscode.Uri,
    webview: vscode.Webview
  ) {
    const nonce = getNonce();

    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${
            webview.cspSource
          }; script-src 'nonce-${nonce}';">
          <link href="${styleResetUri}" rel="stylesheet">
          <link href="${styleVSCodeUri}" rel="stylesheet">
          <title>Nextflow Pipelines</title>
        </head>
        <body>
          <h1>Nextflow Pipelines</h1>
          <div id="error-container" style="color: red;"></div>
          <div id="pipelineTreeContainer"></div>
          <script nonce="${nonce}">
            const vscode = acquireVsCodeApi();

            // Listen for messages from the extension
            window.addEventListener('message', event => {
              const message = event.data;
              switch (message.command) {
                case 'initPipelineTree':
                  // We have a pipeline tree: message.data
                  renderPipelineTree(message.data);
                  break;
              }
            });

            function renderPipelineTree(treeData) {
              const container = document.getElementById('pipelineTreeContainer');
              container.innerHTML = '';

              treeData.forEach(fileObj => {
                const fileDiv = document.createElement('div');
                fileDiv.style.marginBottom = '8px';

                const fileHeader = document.createElement('h3');
                fileHeader.textContent = fileObj.filePath;
                fileHeader.style.cursor = 'pointer';
                fileHeader.onclick = () => {
                  // Example: open file in editor if desired
                  vscode.postMessage({ command: 'openFile', filePath: fileObj.filePath });
                };
                fileDiv.appendChild(fileHeader);

                // Processes
                if (fileObj.processes && fileObj.processes.length > 0) {
                  const processList = document.createElement('ul');
                  fileObj.processes.forEach(proc => {
                    const li = document.createElement('li');
                    li.textContent = 'Process: ' + proc;
                    processList.appendChild(li);
                  });
                  fileDiv.appendChild(processList);
                }

                // Includes
                if (fileObj.includes && fileObj.includes.length > 0) {
                  const incList = document.createElement('ul');
                  fileObj.includes.forEach(inc => {
                    const li = document.createElement('li');
                    li.textContent = 'Include: ' + inc;
                    incList.appendChild(li);
                  });
                  fileDiv.appendChild(incList);
                }

                container.appendChild(fileDiv);
              });
            }

            // Basic error handling
            window.onerror = function(msg, url, line, col, error) {
              const errorContainer = document.getElementById('error-container');
              errorContainer.innerHTML += \`<p>Error: \${msg}</p>\`;
              console.error('Error:', msg, 'at', url, 'line:', line);
              return false;
            };
            window.addEventListener('error', function(e) {
              const errorContainer = document.getElementById('error-container');
              errorContainer.innerHTML += \`<p>Error Event: \${e.message}</p>\`;
              console.error('Error Event:', e);
            });
            try {
              console.log('Webview initialized');
            } catch (e) {
              console.error('Initialization error:', e);
            }
          </script>
        </body>
      </html>`;
  }
}

export default Provider;
