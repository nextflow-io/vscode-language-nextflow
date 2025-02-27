import * as vscode from "vscode";

import { activateChatbot } from "./chatbot";
import { activateLanguageServer, stopLanguageServer } from "./languageServer";
import { activateWelcomePage } from "./welcomePage";
import { activateTelemetry, deactivateTelemetry } from "./telemetry";
import { activateWebview } from "./activateWebview";

export function activate(context: vscode.ExtensionContext) {
  activateWelcomePage(context);
  const trackEvent = activateTelemetry(context);
  activateLanguageServer(context, trackEvent);
  activateChatbot(context, trackEvent);
  console.log("🟣 extensionUri scheme:", context.extensionUri.scheme);
  console.log("🟣 extensionUri:", context.extensionUri.toString());
  activateWebview(context);
}

export function deactivate(
  context: vscode.ExtensionContext
): Promise<[void, void]> {
  return Promise.all([deactivateTelemetry(context), stopLanguageServer()]);
}
