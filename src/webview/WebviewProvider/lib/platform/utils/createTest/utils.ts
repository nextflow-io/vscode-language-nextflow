import * as vscode from "vscode";

export function scrollToEnd(
  editor: vscode.TextEditor,
  document: vscode.TextDocument
) {
  if (editor) {
    const lastLine = document.lineCount - 1;
    const lastPosition = new vscode.Position(
      lastLine,
      document.lineAt(lastLine).text.length
    );
    editor.revealRange(
      new vscode.Range(lastPosition, lastPosition),
      vscode.TextEditorRevealType.Default
    );
  }
}

export async function appendToFile(
  uri: vscode.Uri,
  document: vscode.TextDocument,
  editor: vscode.TextEditor,
  content: string
) {
  const edit = new vscode.WorkspaceEdit();
  edit.replace(
    uri,
    new vscode.Range(
      new vscode.Position(0, 0),
      document.lineAt(document.lineCount - 1).range.end
    ),
    content
  );
  await vscode.workspace.applyEdit(edit);
  scrollToEnd(editor, document);
}
