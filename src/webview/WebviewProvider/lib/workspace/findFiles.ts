import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

function findFiles(
  dir: string,
  extension: string
): string[] {
  const excludedDirs = vscode.workspace
    .getConfiguration("nextflow")
    .get<string[]>("files.exclude", []);

  return fs.readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const filePath = path.join(dir, entry.name);

      if (entry.isDirectory() && !excludedDirs.includes(entry.name))
        return findFiles(filePath, extension);
      if (entry.isFile() && entry.name.endsWith(extension))
        return filePath;
      return undefined;
    })
    .filter(file => file != undefined);
}

function findNfScripts(dir: string): string[] {
  return findFiles(dir, ".nf");
}

function findNfTests(dir: string): string[] {
  return findFiles(dir, ".nf.test");
}

export { findNfScripts, findNfTests };
