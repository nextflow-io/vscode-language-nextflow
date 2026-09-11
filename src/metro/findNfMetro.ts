import * as cp from "child_process";
import * as fs from "fs";
import * as vscode from "vscode";

import { getCandidateNfMetroPaths } from "./candidatePaths";
import type { MetroConfig } from "./types";

const INSTALL_HINT =
  "Install nf-metro with: pip install nf-metro  or  conda install bioconda::nf-metro";

export class NfMetroNotFoundError extends Error {
  constructor() {
    super("nf-metro not found");
    this.name = "NfMetroNotFoundError";
  }
}

export function getMetroConfig(): MetroConfig {
  const config = vscode.workspace.getConfiguration("nextflow.metro");
  return {
    path: config.get<string>("path", ""),
    theme: config.get<MetroConfig["theme"]>("theme", "nfcore"),
    format: config.get<MetroConfig["format"]>("format", "html")
  };
}

function findOnPath(): Promise<string | undefined> {
  const lookup = process.platform === "win32" ? "where nf-metro" : "which nf-metro";
  return new Promise((resolve) => {
    cp.exec(lookup, (error, stdout) => {
      if (error || !stdout.trim()) {
        resolve(undefined);
        return;
      }
      resolve(stdout.trim().split(/\r?\n/)[0]);
    });
  });
}

function findInCandidatePaths(): string | undefined {
  for (const candidate of getCandidateNfMetroPaths()) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return undefined;
}

export async function findNfMetro(): Promise<string | undefined> {
  const { path: configuredPath } = getMetroConfig();
  if (configuredPath) {
    return fs.existsSync(configuredPath) ? configuredPath : undefined;
  }

  const onPath = await findOnPath();
  if (onPath) {
    return onPath;
  }

  return findInCandidatePaths();
}

export async function requireNfMetro(): Promise<string> {
  const nfMetro = await findNfMetro();
  if (!nfMetro) {
    throw new NfMetroNotFoundError();
  }
  return nfMetro;
}

export function showNfMetroNotFound(): void {
  void vscode.window
    .showErrorMessage(`nf-metro was not found. ${INSTALL_HINT}`, "Open PyPI")
    .then((action) => {
      if (action === "Open PyPI") {
        void vscode.env.openExternal(
          vscode.Uri.parse("https://pypi.org/project/nf-metro/")
        );
      }
    });
}
