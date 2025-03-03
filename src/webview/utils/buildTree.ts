import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

import { FileNode } from "../types";

import { findAllFiles } from "./findFiles";
import { getImports, parseBody } from "./parseFile";

async function getItem(
  filePath: string,
  visited: Map<string, FileNode>,
  root: string
): Promise<FileNode | null> {
  if (visited.has(filePath)) return visited.get(filePath)!;
  const content = fs.readFileSync(filePath, "utf8");
  const fileInfo = parseBody(content);
  if (!fileInfo) return null;
  const node: FileNode = {
    name: fileInfo.name,
    fileName: path.relative(root, filePath),
    filePath,
    type: fileInfo?.type,
    imports: getImports(content)
  };
  visited.set(filePath, node);
  return node;
}

export async function buildPipelineTree(): Promise<FileNode[]> {
  const folders = vscode.workspace.workspaceFolders;
  if (!folders?.length) return [];
  const root = folders[0].uri.fsPath;
  const allFiles = await findAllFiles(root);
  const visited = new Map<string, FileNode>();
  const nodes: FileNode[] = [];

  for (const f of allFiles) {
    if (!visited.has(f)) {
      const item = await getItem(f, visited, root);
      if (item) nodes.push(item);
    }
  }
  return nodes;
}
