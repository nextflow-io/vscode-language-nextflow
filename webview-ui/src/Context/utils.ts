function getVscode() {
  if (window.vscode) return window.vscode;
  if (window.acquireVsCodeApi) {
    const vscode = window.acquireVsCodeApi();
    window.vscode = vscode;
    return vscode;
  }
  console.warn("VS Code API could not be acquired");
  return null;
}

export { getVscode };
