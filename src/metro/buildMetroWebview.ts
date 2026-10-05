import { randomUUID } from "crypto";
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

// nf-metro writes its scripts inline, so each one gets the nonce. The
// policy's job here is blocking network access, not script execution.
function withCsp(html: string): string {
  const nonce = randomUUID();
  const csp = [
    "default-src 'none'",
    `script-src 'nonce-${nonce}'`,
    "style-src 'unsafe-inline'",
    "img-src data:",
    "font-src data:"
  ].join("; ");
  const meta = `<meta http-equiv="Content-Security-Policy" content="${csp}">`;
  const withNonces = html.replace(
    /<script(?=[\s>])/gi,
    `<script nonce=${nonce}`
  );
  return /<head(?=[\s>])[^>]*>/i.test(withNonces)
    ? withNonces.replace(/<head(?=[\s>])[^>]*>/i, (head) => `${head}\n${meta}`)
    : meta + withNonces;
}

export async function loadMetroWebviewContent(
  filePath: string,
  format: MetroFormat
): Promise<string> {
  const content = await fs.readFile(filePath, "utf8");
  return withCsp(format === "html" ? content : wrapSvg(content));
}
