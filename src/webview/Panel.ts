import * as vscode from "vscode";

export class Panel {
  public static currentPanel: Panel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private _disposables: vscode.Disposable[] = [];

  private constructor(panel: vscode.WebviewPanel) {
    this._panel = panel;
    this._update();

    // Listen for when the panel is disposed
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

    // Update the content based on view changes
    this._panel.onDidChangeViewState(
      () => {
        if (this._panel.visible) {
          this._update();
        }
      },
      null,
      this._disposables
    );

    // Handle messages from the webview
    this._panel.webview.onDidReceiveMessage(
      async (message) => {
        switch (message.command) {
          case "generateTest":
            break;
        }
      },
      null,
      this._disposables
    );
  }

  public static createOrShow() {
    const column = vscode.ViewColumn.Beside;

    if (Panel.currentPanel) {
      Panel.currentPanel._panel.reveal(column);
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      "combinedConfig",
      "Pipeline Configuration",
      { viewColumn: column, preserveFocus: false },
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [],
      }
    );

    Panel.currentPanel = new Panel(panel);
  }

  private async _update() {
    this._panel.webview.html = Panel.generateWebviewContent();
  }

  public dispose() {
    Panel.currentPanel = undefined;

    this._panel.dispose();

    while (this._disposables.length) {
      const disposable = this._disposables.pop();
      if (disposable) {
        disposable.dispose();
      }
    }
  }

  public static generateWebviewContent(): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
              body {
                font-family: Arial, sans-serif;
                padding: 20px;
                color: var(--vscode-foreground);
                background-color: var(--vscode-editor-background);
              }
          </style>
        </head>
        <body>
            <div class="content-section">
                Content
            </div>
        </body>
      </html>
    `;
  }
}
