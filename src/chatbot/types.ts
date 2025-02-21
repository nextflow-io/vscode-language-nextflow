import * as vscode from "vscode";

export interface ChatReference {
  id: string;
  value: unknown;
}

export interface ChatMessage {
  response: readonly (
    | vscode.ChatResponseMarkdownPart
    | vscode.ChatResponseFileTreePart
    | vscode.ChatResponseAnchorPart
    | vscode.ChatResponseCommandButtonPart
  )[];
}
