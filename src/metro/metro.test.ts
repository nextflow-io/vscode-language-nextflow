import { strict as assert } from "node:assert";
import { describe, it } from "node:test";

import { detectMetroFile } from "./detectMetroFile.ts";
import { parseOutputDirsFromConfig } from "./parseOutputDirs.ts";

describe("detectMetroFile", () => {
  it("detects nf-metro mmd files", () => {
    assert.equal(detectMetroFile("%%metro title: test\ngraph LR", ".mmd"), "mmd");
  });

  it("detects nextflow dag mmd files", () => {
    const dag = `flowchart TB
    v0(["FASTQC"])
    v1(["TRIM"])
    v0 --> v1`;
    assert.equal(detectMetroFile(dag, ".mmd"), "nextflow-dag");
  });

  it("detects nf-metro html files", () => {
    const html = '<html><div class="nf-metro-canvas"><svg></svg></div></html>';
    assert.equal(detectMetroFile(html, ".html"), "html");
  });

  it("detects nf-metro svg files", () => {
    const svg = '<svg data-node-id="fastqc"><script type="application/json">{}</script></svg>';
    assert.equal(detectMetroFile(svg, ".svg"), "svg");
  });

  it("rejects unrelated files", () => {
    assert.equal(detectMetroFile("<html></html>", ".html"), undefined);
    assert.equal(detectMetroFile("graph LR\na --> b", ".mmd"), undefined);
  });
});

describe("parseOutputDirsFromConfig", () => {
  it("includes default output directories", () => {
    const dirs = parseOutputDirsFromConfig("", "/workspace/pipeline");
    assert.ok(dirs.includes("/workspace/pipeline/results"));
    assert.ok(dirs.includes("/workspace/pipeline/output"));
  });

  it("parses outputDir and params.outdir", () => {
    const config = `
      outputDir = 'custom-results'
      params.outdir = 'legacy-results'
    `;
    const dirs = parseOutputDirsFromConfig(config, "/workspace/pipeline");
    assert.ok(dirs.includes("/workspace/pipeline/custom-results"));
    assert.ok(dirs.includes("/workspace/pipeline/legacy-results"));
  });
});
