import * as cp from "child_process";
import * as crypto from "crypto";
import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";

const execFile = promisify(cp.execFile);

export type ReleaseAsset = {
  name: string;
  size: number;
  url: string;
  browser_download_url: string;
};

export type DownloadProgress = (received: number, total: number) => void;

const BUNDLE_PREFIX = "nextflow-language-server-";
const BUNDLE_PATTERN =
  /^nextflow-language-server-(.+)-(linux|macos)-(x64|arm64)$/;
const JAR_PATTERN = /^v(\d.*)\.jar$/;
const TEMP_PREFIX = ".download-";

function isRosetta(): boolean {
  try {
    const output = cp.execFileSync("sysctl", ["-n", "sysctl.proc_translated"], {
      encoding: "utf8"
    });
    return output.trim() === "1";
  } catch (error) {
    return false;
  }
}

/**
 * Get the bundle platform (e.g. `linux-x64`) for the current system,
 * or null if there is no bundle for it.
 */
export function bundlePlatform(
  platform: string = process.platform,
  arch: string = process.arch,
  isTranslated: () => boolean = isRosetta
): string | null {
  if (platform === "linux" && (arch === "x64" || arch === "arm64")) {
    return `linux-${arch}`;
  }
  if (platform === "darwin") {
    // an x64 build of VS Code on Apple silicon runs under Rosetta
    if (arch === "arm64" || (arch === "x64" && isTranslated())) {
      return "macos-arm64";
    }
  }
  return null;
}

export type ServerAssets =
  | { kind: "bundle"; archive: ReleaseAsset; checksum: ReleaseAsset }
  | { kind: "jar"; jar: ReleaseAsset };

/**
 * Select the bundle for the given platform if the release has one,
 * otherwise the jar.
 */
export function selectAssets(
  assets: ReleaseAsset[],
  tag: string,
  platform: string | null
): ServerAssets | null {
  if (platform) {
    const name = `${BUNDLE_PREFIX}${tag.replace(/^v/, "")}-${platform}.tar.gz`;
    const archive = assets.find((asset) => asset.name === name);
    const checksum = assets.find((asset) => asset.name === `${name}.sha256`);
    if (archive && checksum) {
      return { kind: "bundle", archive, checksum };
    }
  }
  const jar = assets.find((asset) => asset.name === "language-server-all.jar");
  return jar ? { kind: "jar", jar } : null;
}

export function bundleDirName(archive: ReleaseAsset): string {
  return archive.name.replace(/\.tar\.gz$/, "");
}

export function bundleLauncher(bundleDir: string): string {
  return path.join(bundleDir, "bin", "nextflow-lsp");
}

export function isValidBundle(bundleDir: string): boolean {
  try {
    fs.accessSync(bundleLauncher(bundleDir), fs.constants.X_OK);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Download a release asset to a file. Draft releases can only be
 * downloaded through the API with a token.
 */
export async function downloadAsset(
  asset: ReleaseAsset,
  dest: string,
  token: string | undefined,
  onProgress?: DownloadProgress
): Promise<void> {
  let response = await fetch(asset.browser_download_url);
  if (!response.ok && token) {
    response = await fetch(asset.url, {
      headers: {
        Accept: "application/octet-stream",
        Authorization: `Bearer ${token}`
      }
    });
  }
  if (!response.ok || !response.body) {
    throw new Error(
      `Failed to download ${asset.name} (HTTP ${response.status})`
    );
  }
  const total = Number(response.headers.get("content-length")) || asset.size;
  const file = await fs.promises.open(dest, "w");
  try {
    let received = 0;
    for await (const chunk of response.body as unknown as AsyncIterable<Uint8Array>) {
      await file.write(chunk);
      received += chunk.length;
      onProgress?.(received, total);
    }
  } finally {
    await file.close();
  }
}

async function sha256(file: string): Promise<string> {
  const hash = crypto.createHash("sha256");
  for await (const chunk of fs.createReadStream(file)) {
    hash.update(chunk);
  }
  return hash.digest("hex");
}

/**
 * Download, verify and extract a bundle into the cache directory.
 * An existing install with the same name is replaced if it is broken
 * or if `replace` is true.
 *
 * Returns the installed bundle directory.
 */
export async function installBundle(
  cacheDir: string,
  archive: ReleaseAsset,
  checksum: ReleaseAsset,
  token: string | undefined,
  replace: boolean,
  onProgress?: DownloadProgress
): Promise<string> {
  const name = bundleDirName(archive);
  const targetDir = path.join(cacheDir, name);
  await fs.promises.mkdir(cacheDir, { recursive: true });
  const tempDir = await fs.promises.mkdtemp(path.join(cacheDir, TEMP_PREFIX));
  try {
    const archivePath = path.join(tempDir, archive.name);
    const checksumPath = path.join(tempDir, checksum.name);
    await downloadAsset(checksum, checksumPath, token);
    await downloadAsset(archive, archivePath, token, onProgress);

    const expected = (await fs.promises.readFile(checksumPath, "utf8"))
      .trim()
      .split(/\s+/)[0]
      .toLowerCase();
    const actual = await sha256(archivePath);
    if (expected !== actual) {
      throw new Error(`Checksum mismatch for ${archive.name}`);
    }

    const extractDir = path.join(tempDir, "extract");
    await fs.promises.mkdir(extractDir);
    await execFile("tar", ["-xzf", archivePath, "-C", extractDir]);
    const extracted = path.join(extractDir, name);
    if (!isValidBundle(extracted)) {
      throw new Error(`${archive.name} does not contain a valid bundle`);
    }
    // mark the install time, which is compared with the release time of previews
    const now = new Date();
    await fs.promises.utimes(extracted, now, now);

    // another window might have installed the bundle in the meantime
    if (!replace && isValidBundle(targetDir)) {
      return targetDir;
    }
    // move an outdated or broken install out of the way
    if (fs.existsSync(targetDir)) {
      await fs.promises.rename(targetDir, path.join(tempDir, "old"));
    }
    try {
      await fs.promises.rename(extracted, targetDir);
    } catch (error: any) {
      // another window installed the bundle in the meantime
      if (
        (error.code === "ENOTEMPTY" || error.code === "EEXIST") &&
        isValidBundle(targetDir)
      ) {
        return targetDir;
      }
      throw error;
    }
    return targetDir;
  } finally {
    await fs.promises.rm(tempDir, { recursive: true, force: true });
  }
}

/**
 * Download a jar into the cache directory.
 *
 * Returns the installed jar path.
 */
export async function installJar(
  cacheDir: string,
  tag: string,
  jar: ReleaseAsset,
  token: string | undefined,
  onProgress?: DownloadProgress
): Promise<string> {
  const targetPath = path.join(cacheDir, `${tag}.jar`);
  await fs.promises.mkdir(cacheDir, { recursive: true });
  const tempDir = await fs.promises.mkdtemp(path.join(cacheDir, TEMP_PREFIX));
  try {
    const tempPath = path.join(tempDir, jar.name);
    await downloadAsset(jar, tempPath, token, onProgress);
    await fs.promises.rename(tempPath, targetPath);
    return targetPath;
  } finally {
    await fs.promises.rm(tempDir, { recursive: true, force: true });
  }
}

export type LocalInstall = {
  kind: "bundle" | "jar";
  name: string;
  version: string;
};

function compareVersions(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true });
}

/**
 * List the bundles and jars in the cache directory, newest first.
 */
export function listLocalInstalls(cacheDir: string): LocalInstall[] {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(cacheDir, { withFileTypes: true });
  } catch (error) {
    return [];
  }
  const result: LocalInstall[] = [];
  for (const entry of entries) {
    const bundleMatch = BUNDLE_PATTERN.exec(entry.name);
    if (bundleMatch && entry.isDirectory()) {
      result.push({
        kind: "bundle",
        name: entry.name,
        version: bundleMatch[1]
      });
      continue;
    }
    const jarMatch = JAR_PATTERN.exec(entry.name);
    if (jarMatch && entry.isFile()) {
      result.push({ kind: "jar", name: entry.name, version: jarMatch[1] });
    }
  }
  // prefer bundles over jars of the same version
  return result.sort(
    (a, b) =>
      compareVersions(b.version, a.version) ||
      (a.kind === b.kind ? 0 : a.kind === "bundle" ? -1 : 1)
  );
}

/**
 * Delete old bundles and jars from the cache directory, keeping the one
 * in use and the most recent other one. Leftover downloads from
 * interrupted installs are deleted after a day.
 */
export async function pruneLocalInstalls(
  cacheDir: string,
  inUse: string
): Promise<string[]> {
  const installs = listLocalInstalls(cacheDir).filter(
    (install) => install.name !== inUse
  );
  const toDelete = installs.slice(1).map((install) => install.name);

  const dayAgo = Date.now() - 24 * 60 * 60 * 1000;
  for (const entry of fs.readdirSync(cacheDir, { withFileTypes: true })) {
    if (
      entry.isDirectory() &&
      entry.name.startsWith(TEMP_PREFIX) &&
      fs.statSync(path.join(cacheDir, entry.name)).mtimeMs < dayAgo
    ) {
      toDelete.push(entry.name);
    }
  }

  for (const name of toDelete) {
    await fs.promises.rm(path.join(cacheDir, name), {
      recursive: true,
      force: true
    });
  }
  return toDelete;
}
