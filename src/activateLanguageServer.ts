import buildMermaid from "./utils/buildMermaid";
import findJava from "./utils/findJava";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  Executable
} from "vscode-languageclient/node";

const LABEL_RELOAD_WINDOW = "Reload Window";
let extensionContext: vscode.ExtensionContext | null = null;
let languageClient: LanguageClient | null = null;
let javaPath: string | null = null;

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

async function getLanguageServerPath() {
  if (!extensionContext) {
    return null;
  }

  // use development build if present
  const devPath = path.resolve(
    extensionContext.extensionPath,
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
    `Downloaded language server ${resolvedVersion}.`
  );
  return fileUri.fsPath;
}

function startLanguageServer() {
  vscode.window.withProgress(
    { location: vscode.ProgressLocation.Window },
    (progress) => {
      return new Promise<void>(async (resolve, reject) => {
        if (!extensionContext) {
          resolve();
          vscode.window.showErrorMessage(
            "The Nextflow extension failed to start."
          );
          return;
        }
        if (!javaPath) {
          resolve();
          let settingsJavaHome = vscode.workspace
            .getConfiguration("nextflow")
            .get("java.home") as string;
          if (settingsJavaHome) {
            vscode.window.showErrorMessage(
              "The nextflow.java.home setting does not point to a valid JDK."
            );
          } else {
            vscode.window.showErrorMessage(
              "Could not locate valid JDK. To configure JDK manually, use the nextflow.java.home setting."
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
        const serverPath = await getLanguageServerPath();
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

async function previewDag(uri: string, name?: string) {
  if (!extensionContext) {
    vscode.window.showErrorMessage("The Nextflow extension failed to start.");
    return;
  }
  const mediaPath = vscode.Uri.joinPath(
    extensionContext?.extensionUri,
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

function stopLanguageServer(): Thenable<void> | undefined {
  if (!languageClient) {
    return undefined;
  }
  return languageClient.stop();
}

function onDidChangeConfiguration(event: vscode.ConfigurationChangeEvent) {
  if (event.affectsConfiguration("nextflow.java.home")) {
    javaPath = findJava();
    restartLanguageServer();
  }
}

function activateLanguageServer(context: vscode.ExtensionContext) {
  javaPath = findJava();
  extensionContext = context;
  vscode.workspace.onDidChangeConfiguration(onDidChangeConfiguration);
  vscode.commands.registerCommand("nextflow.previewDag", previewDag);
  vscode.commands.registerCommand(
    "nextflow.restartServer",
    restartLanguageServer
  );
  vscode.commands.registerCommand("nextflow.stopServer", stopLanguageServer);
  vscode.commands.registerCommand(
    "nextflow.openFileFromWebview",
    async (uriString: string) => {
      if (!uriString) {
        vscode.window.showErrorMessage("Missing file URI.");
        return;
      }
      const uri = vscode.Uri.parse(uriString);
      await vscode.window.showTextDocument(uri, {
        viewColumn: vscode.ViewColumn.One
      });
    }
  );
  startLanguageServer();
}

export { activateLanguageServer, stopLanguageServer };
