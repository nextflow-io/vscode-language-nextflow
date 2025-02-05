import * as vscode from "vscode";
import activateLanguage, { stopLanguageServer } from "./activateLanguage";
import activateChatbot from "./activateChatbot";
import { activateTelemetry, deactivateTelemetry } from "./activateTelemetry";

export function activate(context: vscode.ExtensionContext) {
  activateLanguage(context);
  activateChatbot(context);
  activateTelemetry(context);
}

export function deactivate(): Thenable<void> | undefined {
  deactivateTelemetry();
  return stopLanguageServer();
}
