import * as vscode from "vscode";
import activateLanguage, { stopLanguageServer } from "./activateLanguage";
import activateChatbot from "./activateChatbot";
import { activateTelemetry, deactivateTelemetry } from "./activateTelemetry";

export function activate(context: vscode.ExtensionContext) {
  const trackEvent = activateTelemetry(context);
  activateLanguage(context, trackEvent);
  activateChatbot(context, trackEvent);
}

export function deactivate(
  context: vscode.ExtensionContext
): Thenable<void> | undefined {
  deactivateTelemetry(context);
  return stopLanguageServer();
}
