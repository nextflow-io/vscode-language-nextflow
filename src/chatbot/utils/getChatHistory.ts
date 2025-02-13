import * as vscode from "vscode";

/**
 * Builds chat history from previous chat response turns
 * @param history Array of ChatResponseTurn objects from previous interactions
 * @returns Array of LanguageModelChatMessages for the AI model
 */

function getChatHistory(
  history: readonly vscode.ChatResponseTurn[]
): vscode.LanguageModelChatMessage[] {
  return (
    history
      // Ensure we only process ChatResponseTurn instances
      .filter((h) => h instanceof vscode.ChatResponseTurn)
      .map((m) => {
        // Combine all markdown parts into a single message
        let fullMessage = "";
        m.response.forEach((r) => {
          const mdPart = r as vscode.ChatResponseMarkdownPart;
          fullMessage += mdPart.value.value;
        });
        return vscode.LanguageModelChatMessage.Assistant(fullMessage);
      })
  );
}

export default getChatHistory;
