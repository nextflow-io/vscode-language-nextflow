import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

import { TestNode, TreeNode } from "./types";

function findFiles(dir: string, extension: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const filePath = path.join(dir, entry.name);

      if (entry.isDirectory())
        return findFiles(filePath, extension);
      if (entry.isFile() && entry.name.endsWith(extension))
        return [filePath];
      return [];
    });
}

function getLineNumber(text: string, charIndex: number): number {
  return text.slice(0, charIndex).split("\n").length - 1;
};

function parseNfTest(filePath: string): TestNode[] {
  const uri = vscode.Uri.file(filePath).toString();
  const text = fs.readFileSync(filePath, "utf8");
  const matches = text.matchAll(/^\s*(process|workflow)\s+"(\w+)"/gm);
  return [...matches].map((m) => (
    {
      name: m[2],
      uri: uri,
      line: getLineNumber(text, m.index)
    } as TestNode
  ));
}

function findNfTests(dir: string): TestNode[] {
  return findFiles(dir, ".nf.test").flatMap(parseNfTest);
}

async function previewWorkspace(name: string): Promise<any> {
  try {
    return await vscode.commands.executeCommand("nextflow.server.previewWorkspace", name);
  } catch (error) {
    return null;
  }
}

export async function queryWorkspace(): Promise<TreeNode[]> {
  const folders = vscode.workspace.workspaceFolders;
  if (!folders || folders.length == 0)
    return [];

  const name = folders[0].name;
  const res: any = await previewWorkspace(name);
  if (!res || !res.result) {
    if (res?.error)
      vscode.window.showErrorMessage(res.error);
    return [];
  }

  const nodes = res.result as TreeNode[];
  const tests = new Map<string,TestNode[]>()

  nodes.forEach((node) => {
    const uri = node.uri;
    if (!tests.has(uri)) {
      const filePath = vscode.Uri.parse(uri).fsPath;
      tests.set(uri, findNfTests(path.dirname(filePath)))
    }
    node.test = tests.get(uri)?.find((test) => test.name === node.name);
  });

  return nodes;
}
