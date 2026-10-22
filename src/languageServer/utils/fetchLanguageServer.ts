import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as vscode from "vscode";

import {
  bundleDirName,
  bundleLauncher,
  bundlePlatform,
  DownloadProgress,
  installBundle,
  installJar,
  isValidBundle,
  listLocalInstalls,
  ReleaseAsset,
  selectAssets
} from "./installBundle";

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

type RemoteRelease = {
  tag: string;
  updatedAt: string;
  assets: ReleaseAsset[];
  token: string | undefined;
};

async function getLatestRemoteVersion(
  versionPrefix: string,
  isPreview: boolean = false
): Promise<RemoteRelease | null> {
  try {
    const url = `https://api.github.com/repos/nextflow-io/language-server/releases`;
    const query = (token: string | undefined) =>
      fetch(url, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        }
      });

    let token = await getGitHubToken(true);
    let response = await query(token);
    if (response.status === 403 || response.status === 429) {
      // rate limited without credentials -- ask the user to grant access to
      // their GitHub session, which appears as a badge on the Accounts menu
      const sessionToken = await getGitHubToken(false);
      if (sessionToken) {
        token = sessionToken;
        response = await query(token);
      }
    }
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
      return previewRelease ? toRemoteRelease(previewRelease, token) : null;
    } else {
      // for stable versions, find the latest patch release
      const matchingReleases = (releases as any[])
        .filter((release) => release.tag_name.startsWith(versionPrefix))
        .filter((release) => !release.tag_name.endsWith("PREVIEW"))
        .sort((a, b) =>
          b.tag_name.localeCompare(a.tag_name, undefined, { numeric: true })
        );
      return matchingReleases.length > 0
        ? toRemoteRelease(matchingReleases[0], token)
        : null;
    }
  } catch (error) {
    return null;
  }
}

function toRemoteRelease(
  release: any,
  token: string | undefined
): RemoteRelease {
  return {
    tag: release.tag_name,
    updatedAt: release.updated_at,
    assets: release.assets ?? [],
    token
  };
}

async function getGitHubToken(silent: boolean): Promise<string | undefined> {
  try {
    // no scopes are needed to read public releases, and an unscoped request
    // matches the GitHub session the user is already signed into
    const session = await vscode.authentication.getSession(
      "github",
      [],
      silent ? { silent: true } : { createIfNone: false }
    );
    if (session?.accessToken) {
      return session.accessToken;
    }
  } catch (error) {}
  return process.env.GITHUB_TOKEN;
}

export function cacheDir(versionPrefix: string): string {
  return path.join(os.homedir(), ".nextflow", "lsp", versionPrefix);
}

export type LanguageServer = {
  kind: "bundle" | "jar";
  // launcher for a bundle, jar file for a jar
  path: string;
  // name of the bundle directory or jar in the cache directory
  name: string;
};

function getLatestLocalInstall(
  targetDir: string,
  platform: string | null,
  isPreview: boolean
): LanguageServer | null {
  for (const install of listLocalInstalls(targetDir)) {
    if (install.version.endsWith("PREVIEW") !== isPreview) {
      continue;
    }
    const installPath = path.join(targetDir, install.name);
    if (install.kind === "jar") {
      return { kind: "jar", path: installPath, name: install.name };
    }
    if (
      platform &&
      install.name.endsWith(`-${platform}`) &&
      isValidBundle(installPath)
    ) {
      return {
        kind: "bundle",
        path: bundleLauncher(installPath),
        name: install.name
      };
    }
  }
  return null;
}

function isOutdated(localPath: string, remoteUpdatedAt: string): boolean {
  return fs.statSync(localPath).mtime < new Date(remoteUpdatedAt);
}

function withDownloadProgress<T>(
  tag: string,
  task: (onProgress: DownloadProgress) => Promise<T>
): Thenable<T> {
  return vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: `Downloading Nextflow language server ${tag}`
    },
    (progress) => {
      let reported = 0;
      return task((received, total) => {
        const percent = Math.min(Math.floor((received / total) * 100), 100);
        if (percent > reported) {
          progress.report({
            increment: percent - reported,
            message: `${percent}%`
          });
          reported = percent;
        }
      });
    }
  );
}

async function fetchRelease(
  targetDir: string,
  release: RemoteRelease,
  platform: string | null,
  isPreview: boolean
): Promise<LanguageServer | string> {
  const { tag, updatedAt, token } = release;
  const assets = selectAssets(release.assets, tag, platform);
  if (!assets) {
    return `Nextflow language server ${tag} is not available for this platform (${process.platform}-${process.arch}).`;
  }

  if (assets.kind === "bundle") {
    const name = bundleDirName(assets.archive);
    const bundleDir = path.join(targetDir, name);
    const isInstalled = isValidBundle(bundleDir);
    // for preview versions, re-download if the release is newer than the install
    const replace =
      isPreview && isInstalled && isOutdated(bundleDir, updatedAt);
    if (!isInstalled || replace) {
      await withDownloadProgress(tag, (onProgress) =>
        installBundle(
          targetDir,
          assets.archive,
          assets.checksum,
          token,
          replace,
          onProgress
        )
      );
      vscode.window.showInformationMessage(
        `Downloaded Nextflow language server ${tag}.`
      );
    }
    return { kind: "bundle", path: bundleLauncher(bundleDir), name };
  }

  const name = `${tag}.jar`;
  const jarPath = path.join(targetDir, name);
  const isInstalled = fs.existsSync(jarPath);
  if (!isInstalled || (isPreview && isOutdated(jarPath, updatedAt))) {
    await withDownloadProgress(tag, (onProgress) =>
      installJar(targetDir, tag, assets.jar, token, onProgress)
    );
    vscode.window.showInformationMessage(
      `Downloaded Nextflow language server ${tag}.`
    );
  }
  return { kind: "jar", path: jarPath, name };
}

/**
 * Get the latest patch release of the language server for the given
 * version, downloading it if needed. A bundle with its own Java runtime
 * is preferred over the jar if the release has one for this platform.
 *
 * Returns an error message if no language server could be retrieved.
 */
export async function fetchLanguageServer(
  versionPrefix: string,
  isPreview: boolean
): Promise<LanguageServer | string> {
  const targetDir = cacheDir(versionPrefix);
  const platform = bundlePlatform();
  const release = await getLatestRemoteVersion(versionPrefix, isPreview);
  if (release) {
    try {
      return await fetchRelease(targetDir, release, platform, isPreview);
    } catch (error: any) {
      const local = getLatestLocalInstall(targetDir, platform, isPreview);
      if (!local) {
        return `Failed to download Nextflow language server ${release.tag}: ${error.message}`;
      }
      vscode.window.showWarningMessage(
        `Failed to download Nextflow language server ${release.tag} (${error.message}) -- using ${local.name} from local cache.`
      );
      return local;
    }
  }

  const local = getLatestLocalInstall(targetDir, platform, isPreview);
  if (!local) {
    return "Failed to retrieve language server.";
  }
  vscode.window.showInformationMessage(
    `Failed to query latest version of language server from GitHub -- using ${local.name} from local cache.`
  );
  return local;
}
