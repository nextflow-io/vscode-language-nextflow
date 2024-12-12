import * as vscode from "vscode";

export default function buildMermaid(content: string, name: string, mermaidScriptUri: vscode.Uri): string {
  // Save HTML content into strings so that we can export a partial version without VSCode extras
  const htmlHead = `<head>
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
      .mermaid .node rect {
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
    <script src="${mermaidScriptUri}"></script>
  </head>`;

  // Title and description - VSCode only
  const pageTitle = `<h3>${name} workflow</h3>`;
  const vsCodeHelpText =
    "<p>Click on a process or workflow node to open it in the editor.</p>";

  // Mermaid diagram + JS
  const mermaidDiagram = `
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
  <script type="module">
      import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
      mermaid.initialize({ startOnLoad: true, securityLevel: 'loose' });
  <\/script>
  `;

  // Buttons + JS to download / Export - VSCode only
  // Includes a stripped down version of the whole thing in a string, to be able to save
  // a custom version as a HTML file. Very meta.
  const actionButtons = `
  <div class="action-buttons">
      <button onclick="copyContent()">Copy as markdown</button>
      <button onclick="downloadMermaidPlot()">Export as SVG</button>
      <button onclick="downloadWebviewHtml()">Save HTML</button>
  </div>
  <script>
      // Functionality to copy mermaid as markdown
      // Strips out VSCode code navigation links
      let text = \`
\\\`\\\`\\\`mermaid
${content.replace(/\n\s*click.+/g, "")}
\\\`\\\`\\\`
\`;
      const copyContent = async () => {
        await navigator.clipboard.writeText(text);
      }
      const downloadMermaidPlot = () => {
        const svg = document.querySelector('.mermaid svg');
        if (!svg) return console.error('Mermaid SVG not found');
        const svgData = new XMLSerializer().serializeToString(svg).replace('style="', 'style="background-color:white;');
        const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dag-${name}.svg';
        a.click();
        URL.revokeObjectURL(url);
      };
      const downloadWebviewHtml = () => {
        const html = \`
<html>
  <head>
    ${htmlHead}
  </head>
  <body>
    ${mermaidDiagram.replace(/\n\s*click.+/g, "").replace("</script>", "<\\/script>")}
  </body>
</html>
\`;
        const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dag-${name}.html';
        a.click();
        URL.revokeObjectURL(url);
      };
    </script>
  `;

  // Set the panel HTML for VSCode
  return `
<html>
  ${htmlHead}
  <body>
    ${pageTitle}
    ${vsCodeHelpText}
    ${mermaidDiagram}
    ${actionButtons}
  </body>
</html>
  `;
}
