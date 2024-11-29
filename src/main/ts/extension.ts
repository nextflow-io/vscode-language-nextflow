import findJava from "./utils/findJava";
import * as path from "path";
import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  Executable,
} from "vscode-languageclient/node";
const LABEL_RELOAD_WINDOW = "Reload Window";
let extensionContext: vscode.ExtensionContext | null = null;
let languageClient: LanguageClient | null = null;
let javaPath: string | null = null;
function startLanguageServer() {
  vscode.window.withProgress(
    { location: vscode.ProgressLocation.Window },
    (progress) => {
      return new Promise<void>(async (resolve, reject) => {
        if (!extensionContext) {
          resolve();
          vscode.window.showErrorMessage("The Nextflow extension failed to start.");
          return;
        }
        if (!javaPath) {
          resolve();
          let settingsJavaHome = vscode.workspace
            .getConfiguration("nextflow")
            .get("java.home") as string;
          if (settingsJavaHome) {
            vscode.window.showErrorMessage("The nextflow.java.home setting does not point to a valid JDK.");
          } else {
            vscode.window.showErrorMessage("Could not locate valid JDK. To configure JDK manually, use the nextflow.java.home setting.");
          }
          return;
        }
        progress.report({ message: "Initializing Nextflow language server..." });
        let clientOptions: LanguageClientOptions = {
          documentSelector: [
            { scheme: "file", language: "nextflow" },
            { scheme: "file", language: "nextflow-config" }
          ],
          synchronize: {
            configurationSection: "nextflow",
          },
          uriConverters: {
            code2Protocol: (value: vscode.Uri) => {
              if (/^win32/.test(process.platform)) {
                // drive letters on Windows are encoded with %3A instead of :
                // but Java doesn't treat them the same
                return value.toString().replace("%3A", ":");
              } else {
                return value.toString();
              }
            },
            protocol2Code: (value) => vscode.Uri.parse(value),
          },
        };
        let args = [
          "-jar",
          path.resolve(
            extensionContext.extensionPath,
            "bin",
            "language-server-all.jar"
          ),
        ];
        // uncomment to allow a debugger to attach to the language server
        // args.unshift("-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005,quiet=y");
        let executable: Executable = {
          command: javaPath,
          args: args,
        };
        languageClient = new LanguageClient(
          "nextflow",
          "Nextflow Language Server",
          executable,
          clientOptions
        );
        try {
          await languageClient.start();
        } catch (e) {
          resolve();
          vscode.window.showErrorMessage("The Nextflow extension failed to start.");
          return;
        }
        resolve();
      });
    }
  );
}
async function previewDag(uri: string, name?: string) {
  const content: string = await vscode.commands.executeCommand("nextflow.server.previewDag", uri, name);
  if (!content) {
    vscode.window.showErrorMessage("Failed to render DAG preview.");
    return;
  }
  const panel = vscode.window.createWebviewPanel(
    "dag-preview",
    "DAG Preview",
    vscode.ViewColumn.Beside,
    {
      enableCommandUris: true,
      enableScripts: true
    }
  );
  // Save HTML content into strings so that we can export a partial version without VSCode extras
  const htmlHead = `<head>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
    <style>
      :root {
        --mm-font-family: var(--vscode-font-family, sans-serif);
        --mm-container-square-fill: var(--vscode-sideBarTitle-background, #BABCBD22);
        --mm-container-square-stroke: var(--vscode-tab-lastPinnedBorder, #DDDEDE);
        --mm-container-title: var(--vscode-sideBarTitle-foreground, #160F26);
        --mm-node-text: var(--vscode-tab-activeForeground, #160F26);
        --mm-node-fill: var(--vscode-textCodeBlock-background, #B6ECE2);
        --mm-node-fill-hover: var(--vscode-textBlockQuote-background, #86E0CE);
        --mm-node-border: var(--vscode-checkbox-selectBorder, #065647);
        --mm-connector-lines: var(--vscode-tab-unfocusedActiveModifiedBorder, #545555);
      }
      .mermaid {
        text-align: center;
      }
      .mermaid .nodeLabel, .mermaid .label {
        font-family: var(--mm-font-family) !important;
      }
      .mermaid .nodeLabel {
        font-family: var(--mm-font-family) !important;
      }
      .mermaid .cluster-label .nodeLabel {
        font-weight: 600;
        font-size: 18px;
      }
      /* Workflow / take / emit rectangles */
      .mermaid .cluster rect {
        fill: var(--mm-container-square-fill) !important;
        stroke: var(--mm-container-square-stroke) !important;
        stroke-width: 2px !important;
      }
      .mermaid .cluster span {
        color: var(--mm-container-title) !important;
      }
      /* All node rectangles */
      .mermaid .node rect {
        fill: var(--mm-node-fill) !important;
        stroke: var(--mm-node-border) !important;
        stroke-width: 3px !important;
        transition: fill .15s ease !important;
      }
      .mermaid a .node:hover rect {
        fill: var(--mm-node-fill-hover) !important;
      }
      .mermaid .nodeLabel {
        fill: var(--mm-node-text) !important;
        color: var(--mm-node-text) !important;
      }
      /* Connector lines */
      .mermaid .flowchart-link {
        stroke: var(--mm-connector-lines) !important;
      }
      .mermaid .marker {
        fill: var(--mm-connector-lines) !important;
        stroke: var(--mm-connector-lines) !important;
      }

      /* VSCode action buttons */
      .action-buttons {
        display: flex;
        justify-content: center;
      }
      /* https://github.com/microsoft/vscode-extension-samples/blob/5ddd30fc052e03bbec52e5d84627eaa543fb0de8/webview-view-sample/media/vscode.css#L47 */
      button {
        display: block;
        border: none;
        padding: 6px 8px;
        margin: 0 10px;
        outline: 1px solid transparent;
        outline-offset: 2px !important;
        color: var(--vscode-button-foreground);
        background: var(--vscode-button-background);
      }

      button:hover {
        cursor: pointer;
        background: var(--vscode-button-hoverBackground);
      }

      button:focus {
        outline-color: var(--vscode-focusBorder);
      }

      button.secondary {
        color: var(--vscode-button-secondaryForeground);
        background: var(--vscode-button-secondaryBackground);
      }

      button.secondary:hover {
        background: var(--vscode-button-secondaryHoverBackground);
      }
    </style>
  </head>`;

  // Title and description - VSCode only
  const pageTitle = `<h3>${name} workflow</h3>`;
  const vsCodeHelpText = '<p>Click a process / workflow name to navigate to it in the editor.</p>';

  // Mermaid diagram + JS
  const mermaidDiagram = `
  <pre class="mermaid">
    %%{
      init: {
        'theme': 'base',
        'themeVariables': {
          'primaryColor': '#B6ECE2',
          'primaryTextColor': '#160F26',
          'primaryBorderColor': '#065647',
          'lineColor': '#545555',
          'clusterBkg': '#BABCBD22',
          'clusterBorder': '#DDDEDE',
          'fontFamily': 'arial'
        }
      }
    }%%
    ${content.replace(/href "([^"]+)"/g, 'href "command:nextflow.openFileFromWebview?%5B%22$1%22%5D"')}
    classDef default stroke-width:3px
  </pre>
  <script type="module">
      import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
      mermaid.initialize({ startOnLoad: true, securityLevel: 'loose' });
  <\/script>
  `;

  // Buttons + JS to download / Export - VSCode only
  // Includes a stripped down version of the whole thing in a string, to be able to save
  // a custom version as a HTML file. Very meta.
  const actionButtons = (`
  <div class="action-buttons">
      <button onclick="copyContent()">Copy as markdown</button>
      <button onclick="downloadMermaidPlot()">Export as SVG</button>
      <button onclick="downloadWebviewHtml()">Save HTML</button>
  </div>
  <script>
      // Functionality to copy mermaid as markdown
      // Strips out VSCode code navigation links
      let text = \`
\\\`\\\`\\\`mermaid
${content.replace(/\n\s*click.+/g, '')}
\\\`\\\`\\\`
\`;
      const copyContent = async () => {
        await navigator.clipboard.writeText(text);
      }
      const downloadMermaidPlot = () => {
        const svg = document.querySelector('.mermaid svg');
        if (!svg) return console.error('Mermaid SVG not found');
        const svgData = new XMLSerializer().serializeToString(svg).replace('style="', 'style="background-color:white;');
        const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'DAG-${name}.svg';
        a.click();
        URL.revokeObjectURL(url);
      };
      const downloadWebviewHtml = () => {
        const html = \`
<html>
  ${htmlHead}
  <body>
    ${mermaidDiagram.replace(/\n\s*click.+/g, '').replace('<\/script>', '<\\/script>')}
  </body>
</html>
\`;
        const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'DAG-${name}.html';
        a.click();
        URL.revokeObjectURL(url);
      };
    </script>
  `);

  // Set the panel HTML for VSCode
  panel.webview.html = `
  <html>
  ${htmlHead}
  <body>
    ${pageTitle}
    ${vsCodeHelpText}
    ${mermaidDiagram}
    ${actionButtons}
  </body>
  </html>
  `;
}
function restartLanguageServer() {
  if (!languageClient) {
    startLanguageServer();
    return;
  }
  let oldLanguageClient = languageClient;
  languageClient = null;
  oldLanguageClient.stop().then(
    () => {
      startLanguageServer();
    },
    () => {
      vscode.window
        .showWarningMessage("To apply new settings for Nextflow, please reload the window.", LABEL_RELOAD_WINDOW)
        .then((action) => {
          if (action === LABEL_RELOAD_WINDOW) {
            vscode.commands.executeCommand("workbench.action.reloadWindow");
          }
        });
    }
  );
}
function stopLanguageServer() {
  if (!languageClient) {
    return;
  }
  languageClient.stop()
}
function onDidChangeConfiguration(event: vscode.ConfigurationChangeEvent) {
  if (event.affectsConfiguration("nextflow.java.home")) {
    javaPath = findJava();
    restartLanguageServer();
  }
}
export function activate(context: vscode.ExtensionContext) {
  extensionContext = context;
  javaPath = findJava();
  vscode.workspace.onDidChangeConfiguration(onDidChangeConfiguration);
  vscode.commands.registerCommand("nextflow.previewDag", previewDag);
  vscode.commands.registerCommand("nextflow.restartServer", restartLanguageServer);
  vscode.commands.registerCommand("nextflow.stopServer", stopLanguageServer);
  vscode.commands.registerCommand("nextflow.openFileFromWebview", async (uriString: string) => {
    if (!uriString) {
      vscode.window.showErrorMessage("Missing file URI.");
      return;
    }
    const uri = vscode.Uri.parse(uriString);
    await vscode.window.showTextDocument(uri, { viewColumn: vscode.ViewColumn.One });
  });
  startLanguageServer();
}
export function deactivate() {
  extensionContext = null;
}
