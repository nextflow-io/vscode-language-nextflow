import * as cp from "child_process";
import * as fs from "fs/promises";
import * as path from "path";
import * as vscode from "vscode";

import { getMetroConfig, requireNfMetro } from "./findNfMetro";
import { logMetroMessage } from "./outputChannel";
import type { MetroFormat, RenderResult } from "./types";

function execNfMetro(
  command: string,
  args: string[]
): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    cp.execFile(command, args, { maxBuffer: 10 * 1024 * 1024 }, (error, stdout, stderr) => {
      if (error) {
        const message = stderr.trim() || stdout.trim() || error.message;
        reject(new Error(message));
        return;
      }
      resolve({ stdout, stderr });
    });
  });
}

async function createTempDir(context: vscode.ExtensionContext): Promise<string> {
  const tmpDir = path.join(
    context.globalStorageUri.fsPath,
    "metro-tmp",
    Date.now().toString()
  );
  await fs.mkdir(tmpDir, { recursive: true });
  return tmpDir;
}

async function renderWithNfMetro(
  inputPath: string,
  outputPath: string,
  options: { fromNextflow: boolean; title?: string }
): Promise<RenderResult> {
  const nfMetro = await requireNfMetro();
  const { theme, format } = getMetroConfig();

  const args = [
    "render",
    inputPath,
    "-o",
    outputPath,
    "--format",
    format,
    "--theme",
    theme
  ];

  if (options.fromNextflow) {
    args.push("--from-nextflow");
  }
  if (options.title) {
    args.push("--title", options.title);
  }

  const { stderr } = await execNfMetro(nfMetro, args);
  if (stderr.trim()) {
    logMetroMessage(stderr.trim());
  }

  return { outputPath, format };
}

export async function renderFromDag(
  dagContent: string,
  title: string,
  context: vscode.ExtensionContext
): Promise<RenderResult> {
  const { format } = getMetroConfig();
  const tmpDir = await createTempDir(context);
  const dagFile = path.join(tmpDir, "dag.mmd");
  const outputFile = path.join(tmpDir, `metro.${format === "html" ? "html" : "svg"}`);

  await fs.writeFile(dagFile, dagContent, "utf8");
  return renderWithNfMetro(dagFile, outputFile, { fromNextflow: true, title });
}

export async function renderMetroFile(
  inputPath: string,
  context: vscode.ExtensionContext,
  title?: string,
  fromNextflow = false
): Promise<RenderResult> {
  const { format } = getMetroConfig();
  const tmpDir = await createTempDir(context);
  const outputFile = path.join(tmpDir, `metro.${format === "html" ? "html" : "svg"}`);
  return renderWithNfMetro(inputPath, outputFile, {
    fromNextflow,
    title: title ?? path.basename(inputPath, path.extname(inputPath))
  });
}
