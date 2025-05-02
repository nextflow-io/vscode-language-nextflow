import * as vscode from "vscode";
import * as fs from "fs";
import generateTest from "./generateTest";

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

        progress.report({ message: "Generating code" });
        const nfTest = await generateTest(content, token);
        const newFilePath = filePath.replace(".nf", ".nf.test");

        progress.report({ message: "Creating test file" });
        const workspaceEdit = new vscode.WorkspaceEdit();
        const uri = vscode.Uri.file(newFilePath);
        workspaceEdit.createFile(uri, { ignoreIfExists: false });
        workspaceEdit.insert(uri, new vscode.Position(0, 0), nfTest);

        await vscode.workspace.applyEdit(workspaceEdit);
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
