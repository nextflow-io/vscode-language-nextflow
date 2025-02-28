import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
export interface PipelineFile {
  filePath: string;
  processes: string[];
  includes: string[];
}

/**
 * Recursively find .nf files starting at `rootPath`.
 */
async function findNfFiles(
  dir: string,
  results: string[] = []
): Promise<string[]> {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Exclude node_modules or other folders if necessary
      if (entry.name === "node_modules") continue;
      await findNfFiles(entryPath, results);
    } else if (entry.isFile() && entry.name.endsWith(".nf")) {
      results.push(entryPath);
    }
  }
  return results;
}

/**
 * Naively parse `include` statements from file content.
 * e.g. `include { FASTQC as FQ } from './modules/fastqc'`
 */
function parseIncludes(content: string): string[] {
  const regex = /^\s*include\s+([\w\/.]+)/gm;
  const result: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    result.push(match[1]);
  }
  return result;
}

/**
 * Naively parse `process` definitions from file content.
 * e.g. `process MY_PROCESS { ... }`
 */
function parseProcesses(content: string): string[] {
  const regex = /^\s*process\s+(\w+)/gm;
  const result: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    result.push(match[1]);
  }
  return result;
}

/**
 * Builds a simple pipeline tree by scanning `.nf` files,
 * then parsing includes & processes for each file.
 */
export async function buildPipelineTree(): Promise<PipelineFile[]> {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders || workspaceFolders.length === 0) {
    return [];
  }
  const rootPath = workspaceFolders[0].uri.fsPath;
  const pipelineFiles: PipelineFile[] = [];

  // 1) Collect all .nf files
  const nfFiles = await findNfFiles(rootPath);

  // 2) Parse each .nf file for includes & processes
  for (const nfFile of nfFiles) {
    const content = fs.readFileSync(nfFile, "utf8");
    const includes = parseIncludes(content);
    const processes = parseProcesses(content);

    pipelineFiles.push({
      filePath: nfFile,
      includes,
      processes
    });
  }

  return pipelineFiles;
}
