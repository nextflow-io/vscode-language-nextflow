import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

export interface ProcessInfo {
  name: string;
  type: "process" | "subworkflow";
  hasTest: boolean;
  testFilePath?: string;
}

export interface PipelineNode {
  fileName: string;
  filePath: string;
  processes: ProcessInfo[];
  children: PipelineNode[];
}

async function findAllNfFiles(
  dir: string,
  found: string[] = []
): Promise<string[]> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory() && !["node_modules", ".git"].includes(entry.name)) {
      await findAllNfFiles(p, found);
    } else if (entry.isFile() && entry.name.endsWith(".nf")) {
      found.push(p);
    }
  }
  return found;
}

function parseIncludes(content: string, base: string): string[] {
  const rx = /include\s*\{?[^\}]*\}?\s*from\s+['"]([^'"]+)['"]/gm;
  const result: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = rx.exec(content)) !== null) {
    let rel = m[1];
    if (!rel.endsWith(".nf")) rel += ".nf";
    const abs = path.resolve(path.dirname(base), rel);
    if (fs.existsSync(abs)) result.push(abs);
  }
  return result;
}

function parseProcesses(content: string): ProcessInfo[] {
  const out: ProcessInfo[] = [];
  let rx = /^\s*process\s+(\w+)/gm;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(content)) !== null) {
    out.push({ name: m[1], type: "process", hasTest: false });
  }
  rx = /^\s*subworkflow\s+(\w+)/gm;
  while ((m = rx.exec(content)) !== null) {
    out.push({ name: m[1], type: "subworkflow", hasTest: false });
  }
  return out;
}

function findTestFile(name: string, root: string) {
  const checks = [
    path.join(root, "tests", `${name}.nf.test`),
    path.join(root, "tests", "modules", name, `${name}.nf.test`),
    path.join(root, "tests", "nextflow", `${name}.nf.test`)
  ];
  return checks.find(fs.existsSync);
}

async function buildNode(
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
    node.children.push(await buildNode(inc, visited, root));
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
  const visited = new Map<string, PipelineNode>();
  const result: PipelineNode[] = [];

  const mainNf = allFiles.find((f) => path.basename(f) === "main.nf");
  if (mainNf) result.push(await buildNode(mainNf, visited, root));
  for (const f of allFiles) {
    if (!visited.has(f)) result.push(await buildNode(f, visited, root));
  }
  return result;
}
