import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

import { FileNode } from "./types";

import parseFile from "./parseFile";
import getImports from "./getImports";

const folders = vscode.workspace.workspaceFolders;
const root = folders?.[0]?.uri?.fsPath ?? "";

function getItem(filePath: string): FileNode | null {
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

export default getItem;
