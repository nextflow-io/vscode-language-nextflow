import * as vscode from "vscode";

import { FileNode } from "./types";

import { findNfFiles, findTestFiles } from "./findFiles";
import getItem from "./getItem";

async function buildList(): Promise<{
  files: FileNode[];
  tests: FileNode[];
}> {
  const folders = vscode.workspace.workspaceFolders;
  if (!folders?.length) return { files: [], tests: [] };
  const root = folders[0].uri.fsPath;
  const nfFiles = await findNfFiles(root);
  const testFiles = await findTestFiles(root);
  const nfNodes: FileNode[] = [];
  const testNodes: FileNode[] = [];

  for (const filePath of nfFiles) {
    const item = await getItem(filePath);
    if (item) nfNodes.push(item);
  }

  for (const filePath of testFiles) {
    const item = await getItem(filePath);
    if (item) testNodes.push(item);
  }

  return { files: nfNodes, tests: testNodes };
}

export default buildList;
