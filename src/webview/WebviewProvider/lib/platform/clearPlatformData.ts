import { ExtensionContext, WebviewView } from "vscode";

const clearPlatformData = async (
  view: WebviewView["webview"] | undefined,
  context: ExtensionContext
) => {
  view?.postMessage({ authState: {} });
  const vsCodeState = context.workspaceState;
  vsCodeState.update("platformData", {});
};

export default clearPlatformData;
