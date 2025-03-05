import * as vscode from "vscode";
import { createHandler } from "./chatbot";

export function activateChatbot(context: vscode.ExtensionContext) {
  // Don't activate chatbot in Cursor
  if (vscode.env.appName.includes("Cursor")) {
    return;
  }

  console.log("🟢 Seqera: Activating Chatbot");

  // Create the chat participant
  const chatHandler = createHandler();
  const chatParticipant = vscode.chat.createChatParticipant(
    "nextflow.chatbot",
    chatHandler
  );
  context.subscriptions.push(chatParticipant);

  // Commands
  // Note: must match commands configured in package.json

  const openChat = vscode.commands.registerCommand(
    "nextflow.openChat",
    async () => {
      await vscode.commands.executeCommand("workbench.action.chat.open", {
        query: "@Seqera ",
        isPartialQuery: true
      });
    }
  );

  const writeTest = vscode.commands.registerCommand(
    "nextflow.writeTest",
    async () => {
      await vscode.commands.executeCommand("workbench.action.chat.open", {
        query: "@Seqera /nf-test"
      });
    }
  );

  const convertToDSL2 = vscode.commands.registerCommand(
    "nextflow.convertToDSL2",
    async () => {
      await vscode.commands.executeCommand("workbench.action.chat.open", {
        query: "@Seqera /dsl2"
      });
    }
  );

  context.subscriptions.push(openChat);
  context.subscriptions.push(writeTest);
  context.subscriptions.push(convertToDSL2);
}

export default { activateChatbot };
