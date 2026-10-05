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

// nf-metro's HTML viewer hardcodes a dark chrome whatever the map's mode, so
// remap it onto the VS Code theme. Selectors mirror nf-metro's
// render/standalone.html.
const VSCODE_CHROME = `<style>
  :root {
    --bg: var(--vscode-editor-background);
    --panel: var(--vscode-sideBar-background, var(--vscode-editor-background));
    --panel-border: var(--vscode-panel-border, var(--vscode-widget-border, transparent));
    --text: var(--vscode-foreground);
    --muted: var(--vscode-descriptionForeground);
    --hover: var(--vscode-list-hoverBackground);
    --active: var(--vscode-list-activeSelectionBackground);
  }
  html, body { font-family: var(--vscode-font-family); }
  .btn, .btn.primary {
    color: var(--vscode-button-secondaryForeground);
    background: var(--vscode-button-secondaryBackground);
    border-color: var(--vscode-button-border, transparent);
  }
  .btn:hover { color: var(--vscode-button-secondaryForeground); background: var(--vscode-button-secondaryHoverBackground); }
  .footer-help kbd {
    color: var(--vscode-keybindingLabel-foreground);
    background: var(--vscode-keybindingLabel-background);
    border-color: var(--vscode-keybindingLabel-border);
  }
  .nf-metro-tip, .nf-metro-modal {
    color: var(--vscode-editorWidget-foreground);
    background: var(--vscode-editorWidget-background);
    border-color: var(--vscode-editorWidget-border, var(--vscode-widget-border, transparent));
  }
  .nf-metro-modal pre {
    background: var(--vscode-textCodeBlock-background);
    border-color: var(--vscode-widget-border, transparent);
  }
</style>`;

function withVscodeChrome(html: string): string {
  return /<\/head>/i.test(html)
    ? html.replace(/<\/head>/i, `${VSCODE_CHROME}\n</head>`)
    : html;
}

export async function loadMetroWebviewContent(
  filePath: string,
  format: MetroFormat
): Promise<string> {
  const content = await fs.readFile(filePath, "utf8");
  return withCsp(
    format === "html" ? withVscodeChrome(content) : wrapSvg(content)
  );
}
