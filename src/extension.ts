import * as vscode from "vscode";

import { activateLanguageServer, stopLanguageServer } from "./languageServer";
import { activateTelemetry, deactivateTelemetry } from "./telemetry";
import { activateWebview } from "./webview";
import { activateAuth, AuthProvider } from "./auth";

export function activate(context: vscode.ExtensionContext) {
  const trackEvent = activateTelemetry(context);
  const authProvider = new AuthProvider(context);
  activateAuth(context, authProvider);
  activateLanguageServer(context, trackEvent);
  activateWebview(context, authProvider);
}

export function deactivate(
  context: vscode.ExtensionContext
): Promise<[void, void]> {
  return Promise.all([deactivateTelemetry(context), stopLanguageServer()]);
}
