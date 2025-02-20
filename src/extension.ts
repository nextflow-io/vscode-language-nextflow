import * as vscode from "vscode";
import {
  activateLanguageServer,
  stopLanguageServer,
} from "./activateLanguageServer";
import { activateChatbot } from "./activateChatbot";
import { activateReadme } from "./activateReadme";

export function activate(context: vscode.ExtensionContext) {
  activateReadme(context);
  activateChatbot(context);
  activateLanguageServer(context);
}

export function deactivate(): Thenable<void> | undefined {
  return stopLanguageServer();
}
