import { window } from "vscode";

export const runPipeline = async (repository: string, workspaceId: number) => {
  const command = `nextflow run ${repository} -with-tower ${workspaceId}`;
  const terminal = window.createTerminal("Nextflow Pipeline");
  terminal.show();
  terminal.sendText(command, false);
};
