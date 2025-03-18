// This has proven to be problematic. Must only be called once, and then can
// only be passed along as props.

function getVscode() {
  let vscode: any;
  try {
    if (!window.acquireVsCodeApi) {
      throw new Error("VS Code API not available WS");
    }
    vscode = window.vscode || window.acquireVsCodeApi();
  } catch (error) {
    console.warn("VS Code API could not be acquired WS:", error);
    vscode = null;
  }
  return vscode;
}

export { getVscode };
