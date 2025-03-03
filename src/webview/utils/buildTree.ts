import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

import { PipelineNode } from "../types";

import { findAllNfFiles, findAllTestFiles } from "./findFiles";
import { parseIncludes, parseProcesses } from "./parseContent";

function findTestFile(name: string, root: string) {
  const checks = [
    path.join(root, "tests", `${name}.nf.test`),
    path.join(root, "tests", "modules", name, `${name}.nf.test`),
    path.join(root, "tests", "nextflow", `${name}.nf.test`)
  ];
  return checks.find(fs.existsSync);
}

async function getItem(
  filePath: string,
  visited: Map<string, PipelineNode>,
  root: string
): Promise<PipelineNode> {
  if (visited.has(filePath)) return visited.get(filePath)!;
  const content = fs.readFileSync(filePath, "utf8");
  const node: PipelineNode = {
    fileName: path.relative(root, filePath),
    filePath,
    processes: parseProcesses(content),
    children: []
  };
  visited.set(filePath, node);
  for (const inc of parseIncludes(content, filePath)) {
    node.children.push(await getItem(inc, visited, root));
  }
  for (const p of node.processes) {
    const test = findTestFile(p.name, root);
    if (test) {
      p.hasTest = true;
      p.testFilePath = path.relative(root, test);
    }
  }
  return node;
}

export async function buildPipelineTree(): Promise<PipelineNode[]> {
  const folders = vscode.workspace.workspaceFolders;
  if (!folders?.length) return [];
  const root = folders[0].uri.fsPath;
  const allFiles = await findAllNfFiles(root);
  const allTestFiles = await findAllTestFiles(root);
  const visited = new Map<string, PipelineNode>();
  const result: PipelineNode[] = [];

  const mainNf = allFiles.find((f) => path.basename(f) === "main.nf");
  if (mainNf) result.push(await getItem(mainNf, visited, root));
  for (const f of allFiles) {
    if (!visited.has(f)) result.push(await getItem(f, visited, root));
  }
  return result;
}
