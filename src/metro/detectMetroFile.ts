import type { MetroFileKind } from "./types";

export function detectMetroFile(content: string, ext: string): MetroFileKind | undefined {
  const lowerExt = ext.toLowerCase();

  if (lowerExt === ".mmd") {
    return content.includes("%%metro") ? "mmd" : undefined;
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
