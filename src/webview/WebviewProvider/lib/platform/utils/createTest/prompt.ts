export const systemPrompt = `You ONLY output code for nf-tests, nothing else. Do not include backticks or code blocks. You do not output any other text such as explanations, or anything else. You output pure code. If you output anything else at the end it will break the application.`;

export const getPrompt = (fileContents: string) => {
  return `
Generate an nf-test for the following Nextflow script (it could be a process, a main pipeline/workflow, or a named workflow):

${fileContents}

Please create a complete nf-test that:
1. Tests the basic functionality of the Nextflow script component.
2. Verifies input handling and output production (for processes/workflows) or overall pipeline behavior.
3. Includes appropriate assertions to validate expected behavior.
4. Follows nf-test best practices and conventions as described below.
5. Contains clear comments explaining the test structure.

nf-test Best Practices and Conventions for Processes, Pipelines (Main Workflows), and Named Workflows:

Structure:
- Process Tests: \`nextflow_process { name "<NAME>"; script "<PATH/TO/SCRIPT.nf>"; process "<PROCESS_NAME>"; /* ... tests ... */ }\`
  - Script paths starting with \`./\` or \`../\` are relative to the test script file itself.
- Pipeline/Main Workflow Tests: \`nextflow_pipeline { name "<NAME>"; script "<PATH/TO/PIPELINE.nf>"; /* ... tests ... */ }\`
  - This tests the main, unnamed workflow in the script.
- Named Workflow Tests: \`nextflow_workflow { name "<NAME>"; script "<PATH/TO/SCRIPT.nf>"; workflow "<WORKFLOW_NAME>"; /* ... tests ... */ }\`
  - Script paths starting with \`./\` or \`../\` are relative to the test script file itself.

- Specify the test suite \`name\` and the \`script\` path.
- For process tests, specify the target \`process\` name.
- For named workflow tests, specify the target \`workflow\` name.

Test Blocks (common to all types):
- Define individual test cases using \`test("<test_name>") {}\`.
- Each \`test\` block must contain a \`when {}\` block and a \`then {}\` block.

\`when\` Block (Input Definition):
- Define Nextflow parameters using \`params {}\`. Applicable to all test types.
  \`\`\`groovy
  when {
      // Common params block for pipeline, process, or workflow tests
      params {
          outdir = "output"
          input_text = "hello,nf-test" // Example global param
          // other global params
      }

      // For process-specific inputs:
      process {
          """
          input[0] = Channel.from('hello_proc', 'nf-test_proc')
          input[1] = file("\${projectDir}/test_data/some_file.txt")
          """
      }

      // For named workflow-specific inputs (if it uses 'take:'):
      workflow {
          """
          // Input for the named workflow, e.g., if it has 'take: things'
          input[0] = Channel.from('hello_wf', 'nf-test_wf') 
          """
      }
  }
  \`\`\`
- For process tests, define inputs within the \`process {}\` multi-line string using \`input[0]\`, etc.
- For named workflows that have a \`take:\` block for inputs, define inputs within the \`workflow {}\` multi-line string using \`input[0]\`, etc.
- For pipeline/main workflow tests, inputs are typically controlled via \`params\` or globally available channels defined in \`nextflow.config\` or the script itself.
- Use Nextflow functions like \`file()\`, \`Channel.from()\`, \`Channel.fromPath()\`, etc., to define inputs.

\`then\` Block (Assertions):

  For Process Tests:
  - Assert process status: \`assert process.success\`, \`assert process.failed\`, \`assert process.exitStatus == 0\`.
  - Check trace: \`assert process.trace.tasks().size() == N\`.
  - Check error report: \`assert process.errorReport.contains("...")\`.
  - Check stdout: \`assert process.stdout.contains("...")\`.
  - Access output channels via \`process.out.<channel_name>\` or \`process.out[index]\`.
    \`\`\`groovy
    then {
        assert process.success
        with(process.out.verbiage_ch2) { /* ... assertions on named channel ... */ }
        with(process.out[0]) { /* ... assertions on unnamed channel ... */ }
    }
    \`\`\`

  For Pipeline (Main Workflow) and Named Workflow Tests:
  - The \`workflow\` object is used for assertions in both cases.
  - Assert workflow status: \`assert workflow.success\`, \`assert workflow.failed\`, \`assert workflow.exitStatus == 0\`.
  - Check error report: \`assert workflow.errorReport.contains("...")\`.
  - Check trace: \`assert workflow.trace.succeeded().size() == M\`, \`assert workflow.trace.failed().size() == F\`, \`assert workflow.trace.tasks().size() == T\`.
  - Check stdout (overall workflow stdout): \`assert workflow.stdout.contains("...")\`.
  - Access workflow emitted output channels via \`workflow.out.<channel_name>\`.
    \`\`\`groovy
    // Example for a NAMED WORKFLOW test with an emitted output channel 'trial_out_ch'
    then {
        assert workflow.success
        assert workflow.trace.tasks().size() == 2 // e.g., if the workflow ran 2 tasks
        with(workflow.out.trial_out_ch) {
            assert size() == 2
            assert path(get(0)).readLines().size() == 1
            assert path(get(1)).md5 == "expected_md5_hash_for_workflow_output"
        }
    }
    \`\`\`
    \`\`\`groovy
    // Example for a PIPELINE (main workflow) test
    then {
        assert workflow.success
        assert workflow.trace.succeeded().size() == 2 // Total succeeded tasks in pipeline
        // Assertions on pipeline outputs (if any are explicitly emitted by the main workflow)
        // or check for side effects like created files if no channels are emitted.
    }
    \`\`\`

General Guidelines:
- Use Groovy's power assertions for detailed failure messages.
- Initialize your project with \`nf-test init\`.
- Generate skeletons: \`nf-test generate process/pipeline/workflow <path_to_script.nf> [workflow_name_if_applicable]\`.
- Run tests: \`nf-test test <path_to_test_file.nf.test>\`.
- Specify profiles: \`nf-test test <test_file> --profile docker\`.
- Refer to the official nf-test documentation (https://www.nf-test.com/docs/) for all details.

The test should be compatible with the nf-test framework and follow standard Nextflow testing patterns.
`;
};

export const getValidationPrompt = (testFileContents: string) => {
  return `
Check whether the following nf-test file appears to have finished being generated.
If it looks valid and does not have anything missing at the end, respond with exactly " " (a single space character without quotes).
If it has not finished generating, continue with the generation process and respond with the missing code that needs to be added to make it valid.
Do respond with anything but pure code needed to complete the test file (no comments or backticks).
Your response MUST start precisely from the last character of the following test file:

${testFileContents}
`;
};

export const responseSchema = {
  title: "NFTestCodeGeneration",
  description:
    "Schema for nf-test code generation response. The AI should fill the 'generation.code' property with pure nf-test code.",
  type: "object",
  properties: {
    generation: {
      type: "object",
      properties: {
        code: {
          type: "string",
          description:
            "The generated nf-test code. This must be pure code, without any surrounding markdown, backticks, or explanations."
        }
      },
      required: ["code"]
    }
  },
  required: ["generation"]
};
