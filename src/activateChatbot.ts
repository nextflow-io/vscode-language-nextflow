import * as vscode from "vscode";
import { createHandler } from "./chatbot";

export function activateChatbot(context: vscode.ExtensionContext) {
  console.log("🟢 Seqera extension activated");

  // Create the chat participant
  const chatHandler = createHandler();
  const chatParticipant = vscode.chat.createChatParticipant(
    "seqera-ai.chatbot",
    chatHandler
  );
  context.subscriptions.push(chatParticipant);

  // Commands
  // Note: must match commands configured in package.json

  const openChat = vscode.commands.registerCommand(
    "seqera-ai.openChat",
    async () => {
      await vscode.commands.executeCommand("workbench.action.chat.open", {
        query: "@Seqera ",
        isPartialQuery: true,
      });
    }
  );

  const writeTest = vscode.commands.registerCommand(
    "seqera-ai.writeTest",
    async () => {
      await vscode.commands.executeCommand("workbench.action.chat.open", {
        query: "@Seqera /nf-test",
      });
    }
  );

  context.subscriptions.push(openChat);
  context.subscriptions.push(writeTest);
}

export default { activateChatbot };
