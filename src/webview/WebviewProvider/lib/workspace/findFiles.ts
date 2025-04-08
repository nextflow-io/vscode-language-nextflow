import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

async function findFiles(
  dir: string,
  extension: string,
  found: string[] = []
): Promise<string[]> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    const isValidExtension = entry.name.endsWith(extension);

    const excludedDirs = vscode.workspace
      .getConfiguration("nextflow")
      .get<string[]>("files.exclude", []);

    excludedDirs.push("node_modules");

    if (entry.isDirectory() && !excludedDirs.includes(entry.name)) {
      await findFiles(p, extension, found);
    } else if (entry.isFile() && isValidExtension) {
      found.push(p);
    }
  }
  return found;
}

const findNfFiles = (dir: string) => {
  return findFiles(dir, ".nf");
};

const findTestFiles = (dir: string) => {
  return findFiles(dir, ".nf.test");
};

export { findNfFiles, findTestFiles };
