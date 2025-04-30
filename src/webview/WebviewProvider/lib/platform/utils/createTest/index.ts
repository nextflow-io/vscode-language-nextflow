import * as vscode from "vscode";
import * as fs from "fs";
import generateTest from "./generateTest";

async function createTest(filePath: string, token: string) {
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
        workspaceEdit.createFile(uri, { ignoreIfExists: true });
        workspaceEdit.insert(uri, new vscode.Position(0, 0), nfTest);

        await vscode.workspace.applyEdit(workspaceEdit);
        vscode.window.showInformationMessage(`nf-test created: ${newFilePath}`);
      } catch (error: any) {
        console.log("🟢 Error generating nf-test", error);
        vscode.window.showErrorMessage(
          `Failed to generate nf-test: ${error?.message}`
        );
      }
    }
  );
}

export default createTest;
