import * as vscode from "vscode";
import * as fs from "fs";
import generateRequirements from "./generateRequirements";
import { startBuild } from "./startBuild";

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

        // Find required packages
        progress.report({ message: "Finding required packages" });
        const generatedContent = await generateRequirements(content, token);

        // Start container build
        progress.report({ message: "Starting container build" });
        const buildResult = await startBuild(generatedContent);

        if (buildResult.error) {
          vscode.window.showErrorMessage(
            `Failed to build container: ${buildResult.error}`
          );
          return false;
        }

        // Create and save the container file with build info
        const createEdit = new vscode.WorkspaceEdit();
        createEdit.createFile(uri, { ignoreIfExists: true });
        const createSuccess = await vscode.workspace.applyEdit(createEdit);
        if (!createSuccess) {
          vscode.window.showErrorMessage("Failed to create container file");
          return false;
        }

        const document = await vscode.workspace.openTextDocument(uri);
        const editor = await vscode.window.showTextDocument(document);
        await editor.edit((editBuilder) => {
          editBuilder.insert(
            new vscode.Position(0, 0),
            JSON.stringify(buildResult, null, 2)
          );
        });
        await document.save();

        vscode.window.showInformationMessage(
          `Container build started: ${newFilePath}`
        );

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
