import * as vscode from "vscode";

import { activateChatbot } from "./chatbot";
import {
  activateLanguageServer,
  stopLanguageServer
} from "./languageServer";
import { showReadme } from "./showReadme";

export function activate(context: vscode.ExtensionContext) {
  showReadme(context);
  activateChatbot(context);
  activateLanguageServer(context);
}

export function deactivate(): Thenable<void> {
  return stopLanguageServer();
}
