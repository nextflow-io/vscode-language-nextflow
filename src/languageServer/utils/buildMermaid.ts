import * as vscode from "vscode";
import { randomUUID } from "crypto";

export function buildMermaid(
  content: string,
  name: string,
  mermaidLibUri: vscode.Uri,
  cspSource: string
): string {
  const nonce = randomUUID();

  // Mermaid injects styles as it renders, which a nonce cannot cover. The
  // library is the only thing loaded from disk, so it is the only use of
  // the webview source.
  const csp = [
    "default-src 'none'",
    `script-src ${cspSource} 'nonce-${nonce}'`,
    "style-src 'unsafe-inline'",
    "img-src data:",
    "font-src data:"
  ].join("; ");

  return webview({ content, name, mermaidLibUri, nonce, csp });
}

/**
 * The head shared by the webview and the HTML export. Only the webview passes
 * anything extra: a policy naming the webview source would break the export,
 * which loads Mermaid from a CDN.
 */
function htmlHead(extra = ""): string {
  return `<head>
    ${extra}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
    <style>
      :root {
        --mm-font-family: var(--vscode-font-family, sans-serif);
        --mm-container-square-fill: var(--vscode-sideBarTitle-background, #BABCBD22);
        --mm-container-square-stroke: var(--vscode-tab-lastPinnedBorder, #DDDEDE);
        --mm-container-title: var(--vscode-sideBarTitle-foreground, #160F26);
        --mm-node-text: var(--vscode-tab-activeForeground, #160F26);
        --mm-node-fill: var(--vscode-textCodeBlock-background, #B6ECE2);
        --mm-node-fill-hover: var(--vscode-textBlockQuote-background, #86E0CE);
        --mm-node-border: var(--vscode-checkbox-selectBorder, #065647);
        --mm-connector-lines: var(--vscode-tab-unfocusedActiveModifiedBorder, #545555);
      }
      .mermaid {
        text-align: center;
      }
      .mermaid .nodeLabel, .mermaid .label {
        font-family: var(--mm-font-family) !important;
      }
      .mermaid .nodeLabel {
        font-family: var(--mm-font-family) !important;
      }
      .mermaid .cluster-label .nodeLabel {
        font-weight: 600;
        font-size: 18px;
      }
      /* Workflow / take / emit rectangles */
      .mermaid .cluster rect {
        fill: var(--mm-container-square-fill) !important;
        stroke: var(--mm-container-square-stroke) !important;
        stroke-width: 2px !important;
      }
      .mermaid .cluster span {
        color: var(--mm-container-title) !important;
      }
      /* All node rectangles */
      .mermaid .node rect,
      .mermaid .node polygon {
        fill: var(--mm-node-fill) !important;
        stroke: var(--mm-node-border) !important;
        stroke-width: 3px !important;
        transition: fill .15s ease !important;
      }
      .mermaid a .node:hover rect {
        fill: var(--mm-node-fill-hover) !important;
      }
      .mermaid .nodeLabel {
        fill: var(--mm-node-text) !important;
        color: var(--mm-node-text) !important;
      }
      /* Connector lines */
      .mermaid .flowchart-link {
        stroke: var(--mm-connector-lines) !important;
      }
      .mermaid .marker {
        fill: var(--mm-connector-lines) !important;
        stroke: var(--mm-connector-lines) !important;
      }

      /* VSCode action buttons */
      .action-buttons {
        display: flex;
        justify-content: center;
      }
      /* https://github.com/microsoft/vscode-extension-samples/blob/5ddd30fc052e03bbec52e5d84627eaa543fb0de8/webview-view-sample/media/vscode.css#L47 */
      button {
        display: block;
        border: none;
        padding: 6px 8px;
        margin: 0 10px;
        outline: 1px solid transparent;
        outline-offset: 2px !important;
        color: var(--vscode-button-foreground);
        background: var(--vscode-button-background);
      }

      button:hover {
        cursor: pointer;
        background: var(--vscode-button-hoverBackground);
      }

      button:focus {
        outline-color: var(--vscode-focusBorder);
      }

      button.secondary {
        color: var(--vscode-button-secondaryForeground);
        background: var(--vscode-button-secondaryBackground);
      }

      button.secondary:hover {
        background: var(--vscode-button-secondaryHoverBackground);
      }
    </style>
  </head>`;
}

/** Node links open files in the editor, which a standalone export cannot do. */
function withoutClicks(content: string): string {
  return content.replace(/\n\s*click.+/g, "");
}

function mermaidDiagram(content: string): string {
  return `
  <pre class="mermaid">
    %%{
      init: {
        'theme': 'base',
        'themeVariables': {
          'primaryColor': '#B6ECE2',
          'primaryTextColor': '#160F26',
          'primaryBorderColor': '#065647',
          'lineColor': '#545555',
          'clusterBkg': '#BABCBD22',
          'clusterBorder': '#DDDEDE',
          'fontFamily': 'arial'
        }
      }
    }%%
    ${content.replace(/href "([^"]+)"/g, 'href "command:nextflow.openFileFromWebview?%5B%22$1%22%5D"')}
    classDef default stroke-width:3px
  </pre>
  `;
}

/** A standalone HTML document, encoded for the data URL the export button uses. */
function htmlExport(content: string): string {
  return encodeURIComponent(`
  <html>
    ${htmlHead()}
    <body>
      ${mermaidDiagram(withoutClicks(content))}
      <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
        mermaid.initialize({ startOnLoad: true, securityLevel: 'loose' });
      </script>
    </body>
  </html>`);
}

function webview({
  content,
  name,
  mermaidLibUri,
  nonce,
  csp
}: {
  content: string;
  name: string;
  mermaidLibUri: vscode.Uri;
  nonce: string;
  csp: string;
}): string {
  return `
<html>
  ${htmlHead(`<meta http-equiv="Content-Security-Policy" content="${csp}">`)}
  <body>
    <h3>${name} workflow</h3>
    <p>Click on a process or workflow node to open it in the editor.</p>
    ${mermaidDiagram(content)}
    <script src="${mermaidLibUri}"></script>
    <script nonce="${nonce}">
      document.addEventListener('DOMContentLoaded', function() {
        mermaid.initialize({
          startOnLoad: true,
          securityLevel: 'loose',
          theme: 'base'
        });
      });
    </script>
    <div class="action-buttons">
      <button id="copy-markdown">Copy as Markdown</button>
      <button id="export-svg">Export as SVG</button>
      <button id="export-html">Export as HTML</button>
    </div>
    <script nonce="${nonce}">
      function copyContent() {
        const text = \`\\\`\\\`\\\`mermaid\\n${withoutClicks(content)}\\n\\\`\\\`\\\`\`;
        navigator.clipboard.writeText(text);
      }
      function downloadMermaidSvg() {
        const svg = document.querySelector('.mermaid svg');
        if (!svg) return console.error('Mermaid SVG not found');
        const svgData = new XMLSerializer().serializeToString(svg).replace('style=""', 'style="background-color:white;"');
        const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dag-${name}.svg';
        a.click();
        URL.revokeObjectURL(url);
      }
      function downloadMermaidHtml() {
        const a = document.createElement('a');
        a.href = "data:text/html;charset=utf-8," + "${htmlExport(content)}";
        a.download = 'dag-${name}.html';
        a.click();
      }
      document.getElementById('copy-markdown').addEventListener('click', copyContent);
      document.getElementById('export-svg').addEventListener('click', downloadMermaidSvg);
      document.getElementById('export-html').addEventListener('click', downloadMermaidHtml);
    </script>
  </body>
</html>`;
}
