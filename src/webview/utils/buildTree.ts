import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

import { FileNode } from "../types";

import { findNfFiles, findTestFiles } from "./findFiles";
import { getImports, parseFile } from "./parseFile";

async function getItem(
  filePath: string,
  root: string
): Promise<FileNode | null> {
  const content = fs.readFileSync(filePath, "utf8");
  const fileInfo = parseFile(content);
  if (!fileInfo) return null;
  const node: FileNode = {
    name: fileInfo.name,
    fileName: path.relative(root, filePath),
    filePath,
    type: fileInfo?.type,
    imports: getImports(content),
    line: fileInfo.line
  };
  return node;
}

async function buildTree(): Promise<{
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
    const item = await getItem(filePath, root);
    if (item) nfNodes.push(item);
  }

  for (const filePath of testFiles) {
    const item = await getItem(filePath, root);
    if (item) testNodes.push(item);
  }

  return { files: nfNodes, tests: testNodes };
}

export default buildTree;
