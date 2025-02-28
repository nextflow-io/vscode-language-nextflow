import * as vscode from "vscode";

/**
 * Helper to rewrite local paths (like /assets/*) to vscode-resource URIs
 * so the webview can load them.
 */
const updateRefs = (
  html: string,
  webview: vscode.Webview,
  distUri: vscode.Uri
): string => {
  // Example: find all src/href references in the HTML that start with
  // something like "./assets" or "/assets", and replace them with webview URIs.
  // The exact pattern depends on how your build outputs references.
  const pth = html.replace(
    /((src|href)=["'])(\.\/|\/)?assets\//g,
    `$1${webview.asWebviewUri(vscode.Uri.joinPath(distUri, "assets"))}/`
  );
  console.log("🟣 path:", pth);
  return pth;
};

export default updateRefs;
