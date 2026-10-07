import * as fs from "fs/promises";
import * as path from "path";
import * as vscode from "vscode";

import { detectMetroFile } from "./detectMetroFile";
import { parseOutputDirsFromConfig } from "./parseOutputDirs";

const METRO_EXTENSIONS = new Set([".mmd", ".html", ".svg"]);
const MAX_SCAN_DEPTH = 5;

async function readOutputDirs(workspaceRoot: string): Promise<string[]> {
  const configPath = path.join(workspaceRoot, "nextflow.config");
  try {
    const config = await fs.readFile(configPath, "utf8");
    return parseOutputDirsFromConfig(config, workspaceRoot);
  } catch {
    return parseOutputDirsFromConfig("", workspaceRoot);
  }
}

async function scanDir(dir: string, found: string[], depth = 0): Promise<void> {
  if (depth > MAX_SCAN_DEPTH) {
    return;
  }

  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await scanDir(fullPath, found, depth + 1);
      continue;
    }
    if (!entry.isFile()) {
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!METRO_EXTENSIONS.has(ext)) {
      continue;
    }

    try {
      const content = await fs.readFile(fullPath, "utf8");
      if (detectMetroFile(content, ext)) {
        found.push(fullPath);
      }
    } catch {
      // skip unreadable files
    }
  }
}

export async function findMetroOutputs(): Promise<string[]> {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders?.length) {
    return [];
  }

  const found: string[] = [];
  for (const folder of workspaceFolders) {
    const dirs = await readOutputDirs(folder.uri.fsPath);
    for (const dir of dirs) {
      await scanDir(dir, found);
    }
  }

  return [...new Set(found)].sort((a, b) => a.localeCompare(b));
}
