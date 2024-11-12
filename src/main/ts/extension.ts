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
  const content = await vscode.commands.executeCommand("nextflow.server.previewDag", uri, name);
  if (!content) {
    vscode.window.showErrorMessage("Failed to render DAG preview.");
    return;
  }
  const panel = vscode.window.createWebviewPanel(
    "dag-preview",
    "DAG Preview",
    vscode.ViewColumn.Beside,
    {
      enableScripts: true,
      retainContextWhenHidden: true
    }
  );
  panel.webview.html = `
    <html>
    <head>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
      <style type="text/css">
        #svg-id {
          height: 1024px;
          width: 100%;
        }
      </style>
    </head>
    <body>
      <div id="diagram"></div>
      <script src="https://bumbu.me/svg-pan-zoom/dist/svg-pan-zoom.min.js"></script>
      <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
        mermaid.initialize({ startOnLoad: false, flowchart: { defaultRenderer: "elk" } });

        const drawDiagram = async function () {
          const element = document.querySelector('#diagram');
          const graphDefinition = \`
          ${content}
          \`;
          const { svg } = await mermaid.render('svg-id', graphDefinition);
          element.innerHTML = svg.replace(/( )*max-width:( 0-9\.)*px;/i, '');

          var doPan = false;
          var eventsHandler;
          var panZoom;
          var mousepos;

          eventsHandler = {
            haltEventListeners: ['mousedown', 'mousemove', 'mouseup'],
            mouseDownHandler: function (ev) {
              if (event.target.className == "[object SVGAnimatedString]") {
                doPan = true;
                mousepos = { x: ev.clientX, y: ev.clientY }
              };
            },
            mouseMoveHandler: function (ev) {
              if (doPan) {
                panZoom.panBy({ x: ev.clientX - mousepos.x, y: ev.clientY - mousepos.y });
                mousepos = { x: ev.clientX, y: ev.clientY };
                window.getSelection().removeAllRanges();
              }
            },
            mouseUpHandler: function (ev) {
              doPan = false;
            },
            init: function (options) {
              options.svgElement.addEventListener('mousedown', this.mouseDownHandler, false);
              options.svgElement.addEventListener('mousemove', this.mouseMoveHandler, false);
              options.svgElement.addEventListener('mouseup', this.mouseUpHandler, false);
            },
            destroy: function (options) {
              options.svgElement.removeEventListener('mousedown', this.mouseDownHandler, false);
              options.svgElement.removeEventListener('mousemove', this.mouseMoveHandler, false);
              options.svgElement.removeEventListener('mouseup', this.mouseUpHandler, false);
            }
          };

          panZoom = svgPanZoom('#svg-id', {
            zoomEnabled: true,
            controlIconsEnabled: true,
            fit: 1,
            center: 1,
            customEventsHandler: eventsHandler
          })
        };
        await drawDiagram();
      </script>
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
  startLanguageServer();
}

export function deactivate() {
  extensionContext = null;
}
