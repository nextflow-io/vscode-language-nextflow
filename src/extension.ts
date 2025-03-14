import * as vscode from "vscode";
import { activateChatbot } from "./chatbot";
import { activateLanguageServer, stopLanguageServer } from "./languageServer";
import { showReadme } from "./showReadme";
import { activateTelemetry, deactivateTelemetry } from "./telemetry";

export async function activate(context: vscode.ExtensionContext) {
  showReadme(context);
  const trackEvent = await activateTelemetry(context);
  activateLanguageServer(context, trackEvent);
  activateChatbot(context, trackEvent);
}

export function deactivate(
  context: vscode.ExtensionContext
): Promise<[void, void]> {
  return Promise.all([
    deactivateTelemetry(context),
    stopLanguageServer()
  ]);
}
