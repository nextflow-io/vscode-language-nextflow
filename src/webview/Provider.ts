import * as vscode from "vscode";
import { getNonce } from "./getNonce";

class Provider implements vscode.WebviewViewProvider {
  constructor(private readonly _extensionUri: vscode.Uri) {}

  async resolveWebviewView(webviewView: vscode.WebviewView): Promise<void> {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    const styleResetUri = webviewView.webview.asWebviewUri(
      vscode.Uri.joinPath(
        this._extensionUri,
        "src",
        "webview",
        "styles",
        "reset.css"
      )
    );

    const styleVSCodeUri = webviewView.webview.asWebviewUri(
      vscode.Uri.joinPath(
        this._extensionUri,
        "src",
        "webview",
        "styles",
        "vscode.css"
      )
    );

    webviewView.webview.html = this.getWebviewContent(
      styleResetUri,
      styleVSCodeUri,
      webviewView.webview
    );

    webviewView.webview.onDidReceiveMessage(async (message) => {
      switch (message.command) {
        case "generateTest":
          // Handle test generation
          break;
      }
    });
  }

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
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
          <link href="${styleResetUri}" rel="stylesheet">
          <link href="${styleVSCodeUri}" rel="stylesheet">
          <title>Nextflow Pipelines</title>
        </head>
        <body>
          <h1>Nextflow Pipelines</h1>
          <div id="error-container" style="color: red;"></div>
          <script nonce="${nonce}">
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
