// WIP/experimental file generation for nf-test

import * as vscode from "vscode";
import * as path from "path";

export interface Info {
  name: string;
  filePath: string;
}

async function generateTest(processInfo: Info): Promise<void> {
  try {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
      throw new Error("No workspace folder found");
    }

    // 1) Read the Nextflow (NF) file
    const fileUri = vscode.Uri.file(processInfo.filePath);
    const fileData = await vscode.workspace.fs.readFile(fileUri);
    const fileContent = fileData.toString();

    // 2) Regex to find either a process or a named workflow
    const processRegex = new RegExp(
      `process\\s+${processInfo.name}\\s*\\{([\\s\\S]*?)\\}`,
      "m"
    );
    const namedWorkflowRegex = new RegExp(
      `workflow\\s+${processInfo.name}\\s*\\{([\\s\\S]*?)\\}`,
      "m"
    );
    // 2a) Fallback regex for an unnamed workflow: just `workflow { ... }`
    const unnamedWorkflowRegex = new RegExp(
      `workflow\\s*\\{([\\s\\S]*?)\\}`,
      "m"
    );

    const processMatch = processRegex.exec(fileContent);
    const namedWorkflowMatch = namedWorkflowRegex.exec(fileContent);

    let testContent = "";
    let testFileName = "";

    if (processMatch) {
      // =========== PROCESS ===========
      const processBlock = processMatch[1];

      // Extract the blocks
      const inputBlock = extractBlock(processBlock, "input");
      const outputBlock = extractBlock(processBlock, "output");
      const scriptBlock = extractBlock(processBlock, "script");

      // Create the test content for the process
      testContent = createProcessTestFileContent({
        processInfo,
        inputBlock,
        outputBlock,
        scriptBlock,
      });

      // Name the output file
      testFileName = `${processInfo.name}_test.nf`;
    } else if (namedWorkflowMatch) {
      // =========== NAMED WORKFLOW ===========
      const workflowBlock = namedWorkflowMatch[1];
      const mainFileName = path.basename(processInfo.filePath);

      testContent = createWorkflowTestFileContent({
        // Use the user-supplied name if we found a named workflow
        workflowName: processInfo.name,
        workflowBlock,
        mainFileName,
      });

      testFileName = `${processInfo.name}_testcases.yml`;
    } else {
      // =========== FALLBACK: UNNAMED WORKFLOW? ===========
      const unnamedWorkflowMatch = unnamedWorkflowRegex.exec(fileContent);
      if (unnamedWorkflowMatch) {
        const workflowBlock = unnamedWorkflowMatch[1];
        const mainFileName = path.basename(processInfo.filePath);

        // We can choose a default workflow name for the test
        const defaultName = "unnamed_workflow";

        testContent = createWorkflowTestFileContent({
          workflowName: defaultName,
          workflowBlock,
          mainFileName,
        });

        testFileName = `${defaultName}_testcases.yml`;
      } else {
        // Nothing matched at all
        throw new Error(
          `Could not find process '${processInfo.name}', a named workflow 'workflow ${processInfo.name}', or an unnamed 'workflow { ... }' block.`
        );
      }
    }

    // 3) Write the test file in a `tests/` directory near the original
    const processDir = path.dirname(processInfo.filePath);
    const testDir = path.join(processDir, "tests");
    const testFilePath = path.join(testDir, testFileName);

    await vscode.workspace.fs.createDirectory(vscode.Uri.file(testDir));
    await vscode.workspace.fs.writeFile(
      vscode.Uri.file(testFilePath),
      Buffer.from(testContent, "utf8")
    );

    // 4) Open the newly created test file for the user
    const doc = await vscode.workspace.openTextDocument(testFilePath);
    await vscode.window.showTextDocument(doc, { preview: false });

    vscode.window.showInformationMessage(
      `Generated test file: ${testFileName}`
    );
  } catch (error) {
    vscode.window.showErrorMessage(
      `Failed to generate test: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    console.error("Error generating test:", error);
  }
}

/**
 * Extract a named block (like input, output, script) from inside a process/workflow block.
 * Example: extractBlock("input { file x } output { file y }", "input") => "file x"
 */
function extractBlock(block: string, blockName: string): string {
  const regex = new RegExp(`${blockName}\\s*\\{([\\s\\S]*?)\\}`, "m");
  const match = regex.exec(block);
  return match ? match[1].trim() : "";
}

/**
 * Create a test file for a *process* (like we did originally).
 */
function createProcessTestFileContent({
  processInfo,
  inputBlock,
  outputBlock,
  scriptBlock,
}: {
  processInfo: Info;
  inputBlock: string;
  outputBlock: string;
  scriptBlock: string;
}): string {
  return `\
nextflow_process {

    name "Test ${processInfo.name}"
    // Original process: ${processInfo.name}
    script "../${path.basename(processInfo.filePath)}"
    process "${processInfo.name}"

    // We found these blocks in the process:
    // input:
    /*
${indentBlock(inputBlock)}
    */
    
    // output:
    /*
${indentBlock(outputBlock)}
    */

    test("Should run ${processInfo.name}") {

        when {
            params {
                /*
${indentBlock(inputBlock)}
                */
            }
            process {
                """
${indentBlock(scriptBlock)}
                """
            }
        }

        then {
            assert process.success
        }
    }
}
`;
}

/**
 * Create a testcases file for a *workflow*, following nf-test approach:
 * https://www.nf-test.com/docs/testcases/nextflow_workflow/
 */
function createWorkflowTestFileContent({
  workflowName,
  workflowBlock,
  mainFileName,
}: {
  workflowName: string;
  workflowBlock: string;
  mainFileName: string;
}): string {
  return `\
testcases:
  - name: "Test ${workflowName}"
    workflow:
      entry: "../${mainFileName}"
    nf-params:
      // e.g. set any needed params
      // foo: "bar"

    # The following lines are just a comment referencing the original workflow code:
    # ${workflowBlock
      .trim()
      .split("\n")
      .map((l) => "# " + l)
      .join("\n")}
`;
}

/**
 * Simple helper to indent multi-line blocks for readability.
 */
function indentBlock(block: string, indent = 4): string {
  if (!block) return "";
  const spaces = " ".repeat(indent);
  return block
    .split("\n")
    .map((line) => spaces + line)
    .join("\n");
}

export default generateTest;
