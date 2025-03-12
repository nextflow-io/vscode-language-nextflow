import * as vscode from "vscode";
import { activateChatbot } from "./activateChatbot";
import {
  activateLanguageServer,
  stopLanguageServer
} from "./activateLanguageServer";
import { activateReadme } from "./activateReadme";
import { activateTelemetry, deactivateTelemetry } from "./activateTelemetry";

export async function activate(context: vscode.ExtensionContext) {
  const trackEvent = await activateTelemetry(context);
  activateReadme(context);
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
