import * as vscode from "vscode";
import * as fs from "fs";
import generateTest from "./generateTest";
import doubleCheck from "./doubleCheck";

function scrollToEnd(editor: vscode.TextEditor, document: vscode.TextDocument) {
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

async function createTest(filePath: string, token: string): Promise<boolean> {
  return vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Creating nf-test",
      cancellable: false
    },
    async (progress) => {
      try {
        progress.report({ message: "Reading file contents" });
        const content = fs.readFileSync(filePath, "utf8");
        const newFilePath = filePath.replace(".nf", ".nf.test");
        const uri = vscode.Uri.file(newFilePath);

        // Create the empty file first
        progress.report({ message: "Creating test file" });
        const createEdit = new vscode.WorkspaceEdit();
        createEdit.createFile(uri, { ignoreIfExists: false });

        const createSuccess = await vscode.workspace.applyEdit(createEdit);
        if (!createSuccess) {
          vscode.window.showErrorMessage("Failed to create test file");
          return false;
        }

        // Open the document so we can edit it
        const document = await vscode.workspace.openTextDocument(uri);
        const editor = await vscode.window.showTextDocument(document);

        progress.report({ message: "Generating code (streaming to file)" });

        // Stream the content to the file as it's generated
        let generatedContent = "";
        await generateTest(content, token, async (chunk) => {
          // Append the new chunk to our accumulated content
          generatedContent += chunk;

          // Update the file with the full content so far
          const edit = new vscode.WorkspaceEdit();
          edit.replace(
            uri,
            new vscode.Range(
              new vscode.Position(0, 0),
              document.lineAt(document.lineCount - 1).range.end
            ),
            generatedContent
          );
          await vscode.workspace.applyEdit(edit);
          scrollToEnd(editor, document);
        });

        // Ensure the final content is saved
        await document.save();

        progress.report({ message: "Validating test file" });
        const validationResult = await doubleCheck(generatedContent, token);

        if (validationResult !== true) {
          // If validation failed, append the suggested improvements
          const workspaceEdit = new vscode.WorkspaceEdit();

          // Remove the last line before appending
          const lastLine = document.lineCount - 1;
          const lastLineRange = document.lineAt(lastLine).range;
          workspaceEdit.delete(uri, lastLineRange);

          // Append the validation result
          workspaceEdit.insert(
            uri,
            new vscode.Position(document.lineCount - 1, 0),
            validationResult
          );
          await vscode.workspace.applyEdit(workspaceEdit);
          await document.save();
          scrollToEnd(editor, document);
        }

        vscode.window.showInformationMessage(`nf-test created: ${newFilePath}`);

        return true;
      } catch (error: any) {
        const isAuthError =
          error?.message?.includes("401") ||
          error?.message?.includes("Unauthorized");

        if (isAuthError) {
          return handleAuthError();
        } else {
          vscode.window.showErrorMessage(
            `Failed to generate nf-test: ${error?.message}`
          );
          return false;
        }
      }
    }
  );
}

async function handleAuthError(): Promise<boolean> {
  const loginAction = "Login to Seqera Cloud";
  const result = await vscode.window.showInformationMessage(
    "Authentication required to generate nf-test. Please login to continue.",
    loginAction
  );

  if (result === loginAction) {
    await vscode.commands.executeCommand("nextflow.seqera.login");
  }
  return false;
}

export default createTest;
