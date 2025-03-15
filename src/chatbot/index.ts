import * as vscode from "vscode";

import type { TrackEvent } from "../telemetry";
import { createHandler } from "./createHandler";

export function activateChatbot(
  context: vscode.ExtensionContext,
  trackEvent: TrackEvent
) {
  // Don't activate chatbot in Cursor
  if (vscode.env.appName.includes("Cursor")) {
    return;
  }

  // Create the chat participant
  const chatHandler = createHandler(trackEvent);
  const chatParticipant = vscode.chat.createChatParticipant(
    "nextflow.chatbot",
    chatHandler
  );
  context.subscriptions.push(chatParticipant);

  // Commands

  const openChat = vscode.commands.registerCommand(
    "nextflow.openChat",
    async () => {
      await vscode.commands.executeCommand("workbench.action.chat.open", {
        query: "@Seqera ",
        isPartialQuery: true
      });
      trackEvent("openChat", { source: "commandPalette" });
    }
  );
  context.subscriptions.push(openChat);

  const writeTest = vscode.commands.registerCommand(
    "nextflow.writeTest",
    async () => {
      await vscode.commands.executeCommand("workbench.action.chat.open", {
        query: "@Seqera /nf-test"
      });
      trackEvent("writeTest", { source: "commandPalette" });
    }
  );
  context.subscriptions.push(writeTest);

  const convertToDSL2 = vscode.commands.registerCommand(
    "nextflow.convertToDSL2",
    async () => {
      await vscode.commands.executeCommand("workbench.action.chat.open", {
        query: "@Seqera /dsl2"
      });
      trackEvent("convertToDSL2", { source: "commandPalette" });
    }
  );
  context.subscriptions.push(convertToDSL2);
}
