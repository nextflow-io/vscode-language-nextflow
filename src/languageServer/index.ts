import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  Executable
} from "vscode-languageclient/node";

import { buildMermaid } from "./utils/buildMermaid";
import { findJava } from "./utils/findJava";
import type { TrackEvent } from "../telemetry";

const LABEL_RELOAD_WINDOW = "Reload Window";

let languageClient: LanguageClient | null = null;

async function getLatestRemoteVersion(
  versionPrefix: string
): Promise<string | null> {
  try {
    const url = `https://api.github.com/repos/nextflow-io/language-server/releases`;
    const response = await fetch(url, {
      headers: { Accept: "application/vnd.github.v3+json" }
    });
    if (!response.ok) {
      return null;
    }
    const releases = await response.json();
    const matchingReleases = (releases as any[])
      .map((release) => release.tag_name)
      .filter((tag) => tag.startsWith(versionPrefix))
      .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
    return matchingReleases.length > 0 ? matchingReleases[0] : null;
  } catch (error) {
    return null;
  }
}

async function getLatestLocalVersion(
  versionPrefix: string
): Promise<string | null> {
  const targetDir = path.join(os.homedir(), ".nextflow", "lsp", versionPrefix);
  const files = await vscode.workspace.fs.readDirectory(
    vscode.Uri.file(targetDir)
  );
  const jarFiles = files
    .map(([name]) => name)
    .filter((name) => name.endsWith(".jar"))
    .map((name) => name.replace(".jar", ""))
    .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
  return jarFiles.length > 0 ? jarFiles[0] : null;
}

async function getLanguageServerPath(context: vscode.ExtensionContext) {
  // use development build if present
  const devPath = path.resolve(
    context.extensionPath,
    "bin",
    "language-server-all.jar"
  );
  if (fs.existsSync(devPath)) {
    vscode.window.showInformationMessage(
      "Using development build of language server."
    );
    return devPath;
  }

  // get the latest patch release from GitHub or local cache
  const versionPrefix = vscode.workspace
    .getConfiguration("nextflow")
    .get("targetVersion") as string;
  let resolvedVersion = await getLatestRemoteVersion(versionPrefix);
  if (!resolvedVersion) {
    resolvedVersion = await getLatestLocalVersion(versionPrefix);
    if (resolvedVersion) {
      vscode.window.showInformationMessage(
        `Failed to query latest version of language server from GitHub -- using version ${resolvedVersion} from local cache.`
      );
    }
  }
  if (!resolvedVersion) {
    return null;
  }

  // use locally cached version if present
  const targetDir = path.join(os.homedir(), ".nextflow", "lsp", versionPrefix);
  const cachePath = path.join(targetDir, `${resolvedVersion}.jar`);
  if (fs.existsSync(cachePath)) {
    return cachePath;
  }

  // download latest patch release to local cache
  const response = await fetch(
    `https://github.com/nextflow-io/language-server/releases/download/${resolvedVersion}/language-server-all.jar`
  );
  if (!response.ok) {
    return null;
  }
  const arrayBuffer = await response.arrayBuffer();
  await vscode.workspace.fs.createDirectory(vscode.Uri.file(targetDir));
  const fileUri = vscode.Uri.file(cachePath);
  await vscode.workspace.fs.writeFile(fileUri, new Uint8Array(arrayBuffer));
  vscode.window.showInformationMessage(
    `Downloaded Nextflow language server ${resolvedVersion}.`
  );
  return fileUri.fsPath;
}

function startLanguageServer(context: vscode.ExtensionContext) {
  vscode.window.withProgress(
    { location: vscode.ProgressLocation.Window },
    (progress) => {
      return new Promise<void>(async (resolve, reject) => {
        const javaPath = findJava();
        if (!javaPath) {
          resolve();
          let settingsJavaHome = vscode.workspace
            .getConfiguration("nextflow")
            .get<string>("java.home");
          if (settingsJavaHome) {
            vscode.window.showErrorMessage(
              "The `nextflow.java.home` setting does not point to a valid JDK."
            );
          } else {
            vscode.window.showErrorMessage(
              "Could not locate valid JDK. Use the `nextflow.java.home` setting to configure JDK manually."
            );
          }
          return;
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
        const serverPath = await getLanguageServerPath(context);
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
