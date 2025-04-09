import * as vscode from "vscode";

import { FileNode } from "./types";

import { findNfScripts, findNfTests } from "./findFiles";
import getItem from "./getItem";

function buildList(): {
  files: FileNode[];
  tests: FileNode[];
} {
  const folders = vscode.workspace.workspaceFolders;
  if (!folders?.length)
    return { files: [], tests: [] };

  const root = folders[0].uri.fsPath;

  const files: FileNode[] = findNfScripts(root)
    .map(getItem)
    .filter((item) => item != null);

  const tests: FileNode[] = findNfTests(root)
    .map(getItem)
    .filter((item) => item != null);

  return { files: files, tests: tests };
}

export default buildList;
