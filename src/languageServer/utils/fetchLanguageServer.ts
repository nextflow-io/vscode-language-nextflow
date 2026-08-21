import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as vscode from "vscode";

export function resolveLanguageVersion(): {
  versionPrefix: string;
  isPreview: boolean;
} {
  const languageVersion = vscode.workspace
    .getConfiguration("nextflow")
    .get("languageVersion") as string;
  return {
    versionPrefix: `v${languageVersion.replace(" (preview)", "")}`,
    isPreview: languageVersion.includes("(preview)")
  };
}

async function getLatestRemoteVersion(
  versionPrefix: string,
  isPreview: boolean = false
): Promise<{ tag: string; updatedAt: string } | null> {
  try {
    const url = `https://api.github.com/repos/nextflow-io/language-server/releases`;
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json"
    };
    const token = await getGitHubToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const response = await fetch(url, { headers });
    if (!response.ok) {
      return null;
    }
    const releases = await response.json();

    if (isPreview) {
      // for preview versions, look for exact tag match (e.g., v26.04.0-PREVIEW)
      const previewTag = `${versionPrefix}.0-PREVIEW`;
      const previewRelease = (releases as any[]).find(
        (release) => release.tag_name === previewTag
      );
      return previewRelease
        ? { tag: previewRelease.tag_name, updatedAt: previewRelease.updated_at }
        : null;
    } else {
      // for stable versions, find the latest patch release
      const matchingReleases = (releases as any[])
        .filter((release) => release.tag_name.startsWith(versionPrefix))
        .filter((release) => !release.tag_name.endsWith("PREVIEW"))
        .sort((a, b) =>
          b.tag_name.localeCompare(a.tag_name, undefined, { numeric: true })
        );
      return matchingReleases.length > 0
        ? {
            tag: matchingReleases[0].tag_name,
            updatedAt: matchingReleases[0].updated_at
          }
        : null;
    }
  } catch (error) {
    return null;
  }
}

async function getGitHubToken(): Promise<string | undefined> {
  try {
    const session = await vscode.authentication.getSession("github", ["repo"], {
      silent: true
    });
    if (session?.accessToken) {
      return session.accessToken;
    }
  } catch (error) {}
  return process.env.GITHUB_TOKEN;
}

function cacheDir(versionPrefix: string): string {
  return path.join(os.homedir(), ".nextflow", "lsp", versionPrefix);
}

async function getLatestLocalVersion(
  versionPrefix: string
): Promise<string | null> {
  const targetDir = cacheDir(versionPrefix);
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

export async function fetchLanguageServerJar(
  versionPrefix: string,
  isPreview: boolean
) {
  // get the latest patch release from GitHub or local cache
  let resolvedVersion: string | null = null;
  let remoteUpdatedAt: string | null = null;
  const remoteVersionResponse = await getLatestRemoteVersion(
    versionPrefix,
    isPreview
  );
  if (remoteVersionResponse) {
    resolvedVersion = remoteVersionResponse.tag;
    remoteUpdatedAt = remoteVersionResponse.updatedAt;
  }
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
  const targetDir = cacheDir(versionPrefix);
  const cachePath = path.join(targetDir, `${resolvedVersion}.jar`);
  if (isPreview && fs.existsSync(cachePath) && remoteUpdatedAt) {
    // for preview versions, check if cached version is newer than remote
    const localStats = fs.statSync(cachePath);
    const localModifiedTime = localStats.mtime;
    const remoteUpdatedTime = new Date(remoteUpdatedAt);

    if (localModifiedTime >= remoteUpdatedTime) {
      // local cache is up to date
      return cachePath;
    }
    // local cache is outdated, will re-download below
  } else if (fs.existsSync(cachePath)) {
    // for stable versions, use cache if it exists
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

export function fetchLanguageServerNative(versionPrefix: string): string | null {
  const nativePath = path.join(
    cacheDir(versionPrefix),
    process.platform === "win32" ? "nextflow-lsp.exe" : "nextflow-lsp"
  );
  return fs.existsSync(nativePath) ? nativePath : null;
}
