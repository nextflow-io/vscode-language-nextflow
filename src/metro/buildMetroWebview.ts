import * as fs from "fs/promises";

import type { MetroFormat } from "./types";

function wrapSvg(svg: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background: var(--vscode-editor-background, #ffffff);
    }
    svg {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
  </style>
</head>
<body>
${svg}
</body>
</html>`;
}

export async function loadMetroWebviewContent(
  filePath: string,
  format: MetroFormat
): Promise<string> {
  const content = await fs.readFile(filePath, "utf8");
  if (format === "html") {
    return content;
  }
  return wrapSvg(content);
}
