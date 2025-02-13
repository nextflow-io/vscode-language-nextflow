import * as vscode from "vscode";
import { activateLanguageServer, stopLanguageServer } from "./activateLanguageServer";
import { activateChatbot } from "./activateChatbot";

export function activate(context: vscode.ExtensionContext) {
  activateLanguageServer(context);
  activateChatbot(context);
}

export function deactivate(): Thenable<void> | undefined {
  return stopLanguageServer();
}
