import * as vscode from "vscode";
import * as fs from "fs";
import generateRequirements from "./generateRequirements";
import { appendToFile } from "../createTest/utils";

async function getContainer(filePath: string, token: string): Promise<boolean> {
  return vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Analyzing project config",
      cancellable: false
    },
    async (progress) => {
      try {
        const content = fs.readFileSync(filePath, "utf8");
        const newFilePath = filePath.replace(".nf", ".nf.container");
        const uri = vscode.Uri.file(newFilePath);

        // Create new file
        progress.report({ message: "Creating test file" });
        const createEdit = new vscode.WorkspaceEdit();
        createEdit.createFile(uri, { ignoreIfExists: true });
        const createSuccess = await vscode.workspace.applyEdit(createEdit);
        if (!createSuccess) {
          vscode.window.showErrorMessage("Failed to create test file");
          return false;
        }

        // Open the file
        const document = await vscode.workspace.openTextDocument(uri);
        const editor = await vscode.window.showTextDocument(document);

        // Find required packages
        progress.report({ message: "Finding required packages" });
        let generatedContent = "";
        await generateRequirements(content, token, async (chunk) => {
          generatedContent += chunk;
          await appendToFile(uri, document, editor, generatedContent);
        });

        // Save
        await document.save();

        vscode.window.showInformationMessage(`Done: ${newFilePath}`);

        return true;
      } catch (error: any) {
        const isAuthError =
          error?.message?.includes("401") ||
          error?.message?.includes("Unauthorized");

        if (isAuthError) {
          return handleAuthError();
        } else {
          vscode.window.showErrorMessage(
            `Failed to get container: ${error?.message}`
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

export default getContainer;
