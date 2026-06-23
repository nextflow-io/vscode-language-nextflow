#!/usr/bin/env node
/**
 * Integration smoke test for nf-metro extension logic.
 * Exercises the same pure functions and CLI calls the extension uses,
 * without requiring the VS Code host.
 */
import { strict as assert } from "node:assert";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { getCandidateNfMetroPaths } from "./candidatePaths.ts";
import { detectMetroFile } from "./detectMetroFile.ts";
import { parseOutputDirsFromConfig } from "./parseOutputDirs.ts";

const FIXTURE_ROOT = process.env.METRO_SMOKE_ROOT ?? "/tmp/nf-metro-smoke";

function readFixture(relPath: string): string {
  return fs.readFileSync(path.join(FIXTURE_ROOT, relPath), "utf8");
}

function findNfMetroWithoutPath(): string | undefined {
  for (const candidate of getCandidateNfMetroPaths()) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return undefined;
}

function scanMetroOutputs(workspaceRoot: string): string[] {
  const config = fs.readFileSync(path.join(workspaceRoot, "nextflow.config"), "utf8");
  const dirs = parseOutputDirsFromConfig(config, workspaceRoot);
  const found: string[] = [];
  const extensions = new Set([".mmd", ".html", ".svg"]);

  function scan(dir: string, depth = 0) {
    if (depth > 5) return;
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scan(fullPath, depth + 1);
        continue;
      }
      const ext = path.extname(entry.name).toLowerCase();
      if (!extensions.has(ext)) continue;
      const content = fs.readFileSync(fullPath, "utf8");
      if (detectMetroFile(content, ext)) {
        found.push(fullPath);
      }
    }
  }

  for (const dir of dirs) {
    scan(dir);
  }
  return [...new Set(found)].sort();
}

function main() {
  console.log("nf-metro integration smoke test\n");

  // 1. File detection
  const dag = readFixture("dag.mmd");
  assert.equal(detectMetroFile(dag, ".mmd"), "nextflow-dag", "dag.mmd detection");
  assert.equal(
    detectMetroFile(readFixture("results/metro_map.html"), ".html"),
    "html",
    "html detection"
  );
  assert.equal(
    detectMetroFile(readFixture("results/pipeline.mmd"), ".mmd"),
    "mmd",
    "metro mmd detection"
  );
  console.log("✓ detectMetroFile");

  // 2. Output dir parsing
  const config = readFixture("nextflow.config");
  const dirs = parseOutputDirsFromConfig(config, FIXTURE_ROOT);
  assert.ok(dirs.includes(path.join(FIXTURE_ROOT, "results")));
  assert.ok(dirs.includes(path.join(FIXTURE_ROOT, "custom-out")));
  console.log("✓ parseOutputDirsFromConfig");

  // 3. Output scanning (simulates findMetroOutputs)
  const outputs = scanMetroOutputs(FIXTURE_ROOT);
  assert.equal(outputs.length, 2, `expected 2 outputs, got ${outputs.length}: ${outputs}`);
  console.log("✓ scanMetroOutputs ->", outputs.map((p) => path.basename(p)).join(", "));

  // 4. CLI discovery without PATH
  const nfMetro = findNfMetroWithoutPath();
  assert.ok(nfMetro, "nf-metro should be discoverable via candidate paths");
  console.log("✓ findNfMetro candidate path ->", nfMetro);

  // 5. Render --from-nextflow (simulates previewMetro)
  const dagOut = path.join(FIXTURE_ROOT, "rendered-from-dag.html");
  execFileSync(
    nfMetro,
    [
      "render",
      path.join(FIXTURE_ROOT, "dag.mmd"),
      "-o",
      dagOut,
      "--from-nextflow",
      "--format",
      "html",
      "--theme",
      "nfcore",
      "--title",
      "Smoke DAG"
    ],
    { stdio: "pipe" }
  );
  assert.ok(fs.existsSync(dagOut), "dag render output missing");
  assert.ok(fs.statSync(dagOut).size > 1000, "dag render output too small");
  console.log("✓ nf-metro render --from-nextflow ->", dagOut);

  // 6. Render curated mmd (simulates openMetroFile on .mmd)
  const mmdOut = path.join(FIXTURE_ROOT, "rendered-from-mmd.html");
  execFileSync(
    nfMetro,
    [
      "render",
      path.join(FIXTURE_ROOT, "results/pipeline.mmd"),
      "-o",
      mmdOut,
      "--format",
      "html",
      "--theme",
      "nfcore"
    ],
    { stdio: "pipe" }
  );
  assert.ok(fs.existsSync(mmdOut), "mmd render output missing");
  console.log("✓ nf-metro render curated .mmd ->", mmdOut);

  // 7. Pre-rendered html loads (simulates openMetroFile on .html)
  const html = fs.readFileSync(path.join(FIXTURE_ROOT, "results/metro_map.html"), "utf8");
  assert.equal(detectMetroFile(html, ".html"), "html");
  console.log("✓ pre-rendered html open path");

  console.log("\nAll integration smoke checks passed.");
}

main();
