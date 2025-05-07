import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as vscode from "vscode";

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
  try {
    const files = await vscode.workspace.fs.readDirectory(
      vscode.Uri.file(targetDir)
    );
    const jarFiles = files
      .map(([name]) => name)
      .filter((name) => name.endsWith(".jar"))
      .map((name) => name.replace(".jar", ""))
      .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
    return jarFiles.length > 0 ? jarFiles[0] : null;
  } catch (error) {
    return null;
  }
}

export async function fetchLanguageServer(context: vscode.ExtensionContext) {
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
  const languageVersion = vscode.workspace
    .getConfiguration("nextflow")
    .get("languageVersion") as string;
  const versionPrefix = `v${languageVersion}`;
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
