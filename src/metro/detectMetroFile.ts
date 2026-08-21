import type { MetroFileKind } from "./types";

function isNextflowDag(content: string): boolean {
  return /flowchart\s+TB/i.test(content) && /\(\["/.test(content);
}

export function detectMetroFile(content: string, ext: string): MetroFileKind | undefined {
  const lowerExt = ext.toLowerCase();

  if (lowerExt === ".mmd") {
    if (content.includes("%%metro")) {
      return "mmd";
    }
    if (isNextflowDag(content)) {
      return "nextflow-dag";
    }
    return undefined;
  }

  if (lowerExt === ".html") {
    if (
      content.includes("nf-metro") &&
      (content.includes("<svg") || content.includes("data-nfm"))
    ) {
      return "html";
    }
    return undefined;
  }

  if (lowerExt === ".svg") {
    if (
      content.includes('script type="application/json"') ||
      content.includes("data-node-") ||
      content.includes("nf-metro")
    ) {
      return "svg";
    }
    return undefined;
  }

  return undefined;
}
