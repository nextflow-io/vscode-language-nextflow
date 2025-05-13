import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  Executable
} from "vscode-languageclient/node";

import { buildMermaid } from "./utils/buildMermaid";
import { fetchLanguageServer } from "./utils/fetchLanguageServer";
import { findJava, checkJavaVersion } from "./utils/findJava";
import type { TrackEvent } from "../telemetry";

const LABEL_RELOAD_WINDOW = "Reload Window";

let languageClient: LanguageClient | null = null;

function startLanguageServer(context: vscode.ExtensionContext) {
  vscode.window.withProgress(
    { location: vscode.ProgressLocation.Window },
    (progress) => {
      return new Promise<void>(async (resolve, reject) => {
        const javaPath = findJava();
        if (!javaPath) {
          resolve();
          const settingsJavaHome = vscode.workspace
            .getConfiguration("nextflow")
            .get<string>("java.home");
          if (settingsJavaHome) {
            vscode.window.showErrorMessage(
              "The `nextflow.java.home` setting does not point to a valid Java install."
            );
          } else {
            vscode.window.showErrorMessage(
              "Could not locate Java. Use the `nextflow.java.home` setting to configure Java manually."
            );
          }
          return;
        }
        try {
          if (!checkJavaVersion(javaPath)) {
            resolve();
            vscode.window.showErrorMessage(
              `Java 17 or later is required to use the Nextflow language server (using path: ${javaPath}).`
            );
            return;
          }
        }
        catch (e) {
          vscode.window.showWarningMessage(`Failed to check Java version: ${e}`);
        }
        progress.report({
          message: "Initializing Nextflow language server..."
        });
        const clientOptions: LanguageClientOptions = {
          documentSelector: [
            { scheme: "file", language: "nextflow" },
            { scheme: "file", language: "nextflow-config" }
          ],
          synchronize: {
            configurationSection: "nextflow"
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
            protocol2Code: (value) => vscode.Uri.parse(value)
          }
        };
        const serverPath = await fetchLanguageServer(context);
        if (!serverPath) {
          resolve();
          vscode.window.showErrorMessage("Failed to retrieve language server.");
          return;
        }
        const args = ["-jar", serverPath];
        // uncomment to allow a debugger to attach to the language server
        // args.unshift("-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005,quiet=y");
        const executable: Executable = {
          command: javaPath,
          args: args
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
          vscode.window.showErrorMessage(
            "The Nextflow extension failed to start."
          );
          return;
        }
        resolve();
      });
    }
  );
}

async function previewDag(context: vscode.ExtensionContext, uri: string, name?: string) {
  const mediaPath = vscode.Uri.joinPath(
    context.extensionUri,
    "media"
  );
  const res: any = await vscode.commands.executeCommand(
    "nextflow.server.previewDag",
    uri,
    name
  );
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
    vscode.Uri.joinPath(mediaPath, "mermaid.min.js")
  );
  panel.webview.html = buildMermaid(content, name ?? "Entry", mermaidLibUri);
}

function restartLanguageServer(context: vscode.ExtensionContext) {
  if (!languageClient) {
    startLanguageServer(context);
    return;
  }
  let oldLanguageClient = languageClient;
  languageClient = null;
  oldLanguageClient.stop().then(
    () => {
      startLanguageServer(context);
    },
    () => {
      vscode.window
        .showWarningMessage(
          "To apply new settings for Nextflow, please reload the window.",
          LABEL_RELOAD_WINDOW
        )
        .then((action) => {
          if (action === LABEL_RELOAD_WINDOW) {
            vscode.commands.executeCommand("workbench.action.reloadWindow");
          }
        });
    }
  );
}

export function stopLanguageServer(): Thenable<void> {
  if (!languageClient) {
    return Promise.resolve();
  }
  return languageClient.stop();
}

export function activateLanguageServer(
  context: vscode.ExtensionContext,
  trackEvent: TrackEvent
) {
  vscode.workspace.onDidChangeConfiguration((event: vscode.ConfigurationChangeEvent) => {
    if (event.affectsConfiguration("nextflow.java.home")) {
      restartLanguageServer(context);
    }
  });
  vscode.commands.registerCommand(
    "nextflow.previewDag",
    (uri, name) => { previewDag(context, uri, name); }
  );
  vscode.commands.registerCommand(
    "nextflow.languageServer.restart",
    () => { restartLanguageServer(context); }
  );
  vscode.commands.registerCommand("nextflow.languageServer.stop", stopLanguageServer);
  vscode.commands.registerCommand(
    "nextflow.openFileFromWebview",
    async (uriString: string) => {
      if (!uriString) {
        vscode.window.showErrorMessage("Missing file URI.");
        return;
      }
      trackEvent("openFileFromWebview");
      const uri = vscode.Uri.parse(uriString);
      await vscode.window.showTextDocument(uri, {
        viewColumn: vscode.ViewColumn.One
      });
    }
  );
  startLanguageServer(context);
}
