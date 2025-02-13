// WIP/experimental file generation for nf-test using an LLM API

import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs/promises";

// The type of data we’ll feed into the LLM
interface WorkflowTestContext {
  mainFileContent: string;
  // Each entry has the path, raw content, plus parsed names if you want them
  importedModules: {
    importStatement: string; // e.g. "FASTQC as FASTQC_RAW"
    modulePath: string; // e.g. "./modules/fastqc"
    moduleFileContent: string;
  }[];
}

/**
 * A new function that:
 *  1) Reads main.nf
 *  2) Detects module imports
 *  3) Reads those modules
 *  4) Calls an LLM with the combined data
 *  5) Writes out the test file returned from the LLM
 */
export async function generateWorkflowTestWithImports(
  mainFilePath: string
): Promise<void> {
  try {
    // 1) Read the main workflow file
    const mainUri = vscode.Uri.file(mainFilePath);
    const mainContent = await vscode.workspace.fs.readFile(mainUri);
    const mainFileString = mainContent.toString();

    // 2) Parse out the imports (naive regex for `include { ... } from '...'`)
    //    This covers lines like:  include { FASTQC as FASTQC_RAW } from './modules/fastqc'
    const importRegex = /include\s*\{\s*([^}]+)\}\s*from\s*['"]([^'"]+)['"]/g;
    // Explanation:
    //   Group 1 -> inside curly braces: "FASTQC as FASTQC_RAW"
    //   Group 2 -> the module file path: "./modules/fastqc"

    let match: RegExpExecArray | null;
    const importedModules: WorkflowTestContext["importedModules"] = [];

    // For each `include` line we match
    while ((match = importRegex.exec(mainFileString)) !== null) {
      const importStatement = match[1].trim(); // e.g. "FASTQC as FASTQC_RAW"
      const modulePathRel = match[2].trim(); // e.g. "./modules/fastqc"
      const moduleAbsPath = path.resolve(
        path.dirname(mainFilePath),
        modulePathRel
      );

      // 3) Read the module file
      let moduleFileContent = "";
      try {
        const fileBuffer = await fs.readFile(moduleAbsPath);
        moduleFileContent = fileBuffer.toString();
      } catch (err) {
        console.warn(`Could not read imported module at ${moduleAbsPath}`, err);
      }

      importedModules.push({
        importStatement,
        modulePath: modulePathRel,
        moduleFileContent,
      });
    }

    // 4) Create a context object to feed into the LLM
    const contextForLLM: WorkflowTestContext = {
      mainFileContent: mainFileString,
      importedModules,
    };

    // 5) Build a prompt for the LLM
    //    This is a simplistic example. In reality, you want to carefully craft instructions
    //    so the LLM outputs a valid nf-test YAML or Nextflow test script.
    const prompt = buildLLMPrompt(contextForLLM);

    // 6) Call the LLM to get a generated test file (Pseudo-code: depends on your LLM usage)
    //    If you’re using Copilot via the VS Code extension, you can’t directly call it in code,
    //    but you might have an API-based method for ChatGPT or OpenAI.
    //    For demonstration, let's say you have a function `invokeLLM(prompt: string): Promise<string>`
    const generatedTest = await invokeLLM(prompt);

    // 7) Write the resulting test
    //    We can guess a name or let the LLM provide one. For this example, we do:
    const testDir = path.join(path.dirname(mainFilePath), "tests");
    await vscode.workspace.fs.createDirectory(vscode.Uri.file(testDir));
    const testFilePath = path.join(testDir, "main_workflow_testcases.yml");

    await vscode.workspace.fs.writeFile(
      vscode.Uri.file(testFilePath),
      Buffer.from(generatedTest, "utf8")
    );

    // 8) Optionally open the file in the editor
    const doc = await vscode.workspace.openTextDocument(testFilePath);
    await vscode.window.showTextDocument(doc, { preview: false });

    vscode.window.showInformationMessage(
      `Workflow test generated at: ${testFilePath}`
    );
  } catch (err) {
    console.error("Error generating workflow test with imports:", err);
    vscode.window.showErrorMessage(
      `Failed to generate workflow test: ${String(err)}`
    );
  }
}

/**
 * Build a prompt that instructs the LLM to produce an nf-test YAML.
 * Adjust as needed. The more context you provide about the desired test structure,
 * the better the results typically are.
 */
function buildLLMPrompt(context: WorkflowTestContext): string {
  const { mainFileContent, importedModules } = context;

  // Summarize the module contents
  let moduleSummaries = "";
  for (const mod of importedModules) {
    moduleSummaries += `
------
MODULE IMPORT STATEMENT:
${mod.importStatement}
PATH: ${mod.modulePath}

MODULE CONTENT:
${mod.moduleFileContent}
------
`;
  }

  // This is an example. In practice, you'd want to carefully define any required
  // sections (testcases:, workflow:, nf-params:, etc.)
  const instructions = `
You are a Nextflow test generator. Given a main Nextflow DSL2 workflow 
and its imported modules, create a valid nf-test YAML file that thoroughly tests 
the workflow. Use the "testcases" approach from nf-test: 
https://www.nf-test.com/docs/testcases/nextflow_workflow/

Requirements:
- At least one test case.
- The workflow entry should point to the main .nf file.
- If you see that the workflow calls certain modules, reflect that in the test.
- Provide placeholders or example "nf-params" for channels/parameters as needed.
- If possible, note or check any known outputs from these modules 
  (like FASTQC reports, TRIMGALORE trimmed reads, etc.).
- Provide a short comment where needed so a developer can customize further.

MAIN WORKFLOW CONTENT:
${mainFileContent}

IMPORTED MODULES:
${moduleSummaries}

Respond ONLY with the raw nf-test YAML (no markdown formatting).
  `.trim();

  return instructions;
}

/**
 * Pseudo-code: Suppose you have a function that calls an LLM (like OpenAI) with a prompt
 * and returns the text response.
 *
 * In practice, you might use openai npm package or an internal function.
 * This is just a placeholder to illustrate the flow.
 */
async function invokeLLM(prompt: string): Promise<string> {
  // TODO: Connect to the LLM of your choice
  // e.g. using openai npm package:
  /*
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "system", content: prompt }],
      temperature: 0.2,
    });
    return response.data.choices[0].message?.content ?? "";
  */
  return Promise.resolve(
    `# Mocked example. The real code should call an LLM.\ntestcases:\n  - name: "Example Workflow Test"\n    workflow:\n      entry: "../main.nf"\n    nf-params:\n      reads: "data/*.fastq.gz"\n      outdir: "results"\n`
  );
}
