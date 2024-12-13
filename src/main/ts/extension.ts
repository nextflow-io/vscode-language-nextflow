import buildMermaid from "./utils/buildMermaid";
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
let mediaPath = vscode.Uri.file('.');

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
  const res: any = await vscode.commands.executeCommand("nextflow.server.previewDag", uri, name);
  if (!res || !res.result) {
    const message = res?.error ?? "Failed to render DAG preview.";
    vscode.window.showErrorMessage(message);
    return;
  }
  const content = res.result;
  const panel = vscode.window.createWebviewPanel(
    "dag-preview",
    "DAG Preview",
    vscode.ViewColumn.Beside,
    {
      enableCommandUris: true,
      enableScripts: true,
      localResourceRoots: [mediaPath]
    }
  );
  const mermaidLibUri = panel.webview.asWebviewUri(
    vscode.Uri.joinPath(mediaPath, 'mermaid.min.js')
  );
  panel.webview.html = buildMermaid(content, name ?? 'Entry', mermaidLibUri);
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
  languageClient.stop();
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
  mediaPath = vscode.Uri.joinPath(context.extensionUri, 'media');
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
  stopLanguageServer();
  extensionContext = null;
}
