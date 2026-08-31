import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

import { TestNode, TreeNode } from "./types";

function findFiles(dir: string, extension: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) return findFiles(filePath, extension);
    if (entry.isFile() && entry.name.endsWith(extension)) return [filePath];
    return [];
  });
}

function getLineNumber(text: string, charIndex: number): number {
  return text.slice(0, charIndex).split("\n").length - 1;
}

function parseNfTest(filePath: string): TestNode[] {
  const text = fs.readFileSync(filePath, "utf8");
  const matches = text.matchAll(/^\s*(process|workflow)\s+"(\w+)"/gm);
  return [...matches].map(
    (m) =>
      ({
        name: m[2],
        path: filePath,
        line: getLineNumber(text, m.index)
      }) as TestNode
  );
}

function findNfTests(dir: string): TestNode[] {
  return findFiles(dir, ".nf.test").flatMap(parseNfTest);
}

async function previewWorkspace(name: string): Promise<any> {
  try {
    return await vscode.commands.executeCommand(
      "nextflow.server.previewWorkspace",
      name
    );
  } catch (error) {
    return null;
  }
}

const PROJECT_FILES = ["main.nf", "nextflow.config"];

export function getWorkspaceFolders(): string[] {
  const folders = vscode.workspace.workspaceFolders ?? [];
  const projects = folders.filter((folder) =>
    PROJECT_FILES.some((file) =>
      fs.existsSync(path.join(folder.uri.fsPath, file))
    )
  );
  // fall back to every folder so projects with a non-standard layout still work
  return (projects.length > 0 ? projects : folders).map(
    (folder) => folder.name
  );
}

export async function queryWorkspace(name?: string): Promise<TreeNode[]> {
  if (!name) return [];

  const res: any = await previewWorkspace(name);
  if (!res || !res.result) {
    if (res?.error) vscode.window.showErrorMessage(res.error);
    return [];
  }

  const nodes = res.result as TreeNode[];
  const tests = new Map<string, TestNode[]>();

  nodes.forEach((node) => {
    const filePath = node.path;
    if (!tests.has(filePath)) {
      tests.set(filePath, findNfTests(path.dirname(filePath)));
    }
    node.test = tests.get(filePath)?.find((test) => test.name === node.name);
  });

  return nodes;
}
