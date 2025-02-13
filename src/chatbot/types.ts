import * as vscode from "vscode";

// ChatReference interface tracks VS Code content references (files, viewports etc)
// with an id string and value containing Uri, viewport data, or other VS Code content

export interface ChatReference {
  id: string;
  value: unknown;
}

// ChatMessage interface represents a VS Code chat response containing
// an array of markdown, file tree, anchor, and command button parts
// for building rich interactive messages

export interface ChatMessage {
  response: readonly (
    | vscode.ChatResponseMarkdownPart
    | vscode.ChatResponseFileTreePart
    | vscode.ChatResponseAnchorPart
    | vscode.ChatResponseCommandButtonPart
  )[];
}
