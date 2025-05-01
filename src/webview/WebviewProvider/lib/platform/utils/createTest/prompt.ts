export const systemPrompt = `You ONLY output code for nf-tests, nothing else. Do not include backticks or code blocks. You do not output any other text such as explanations, or anything else. You output pure code.`;

export const getUserPrompt = (fileContents: string) => {
  return `
Generate an nf-test for the following Nextflow process:

${fileContents}

Please create a complete nf-test that:
1. Tests the basic functionality of this process
2. Verifies input handling and output production
3. Includes appropriate assertions to validate expected behavior
4. Follows nf-test best practices and conventions
5. Contains clear comments explaining the test structure

The test should be compatible with the nf-test framework (https://code.askimed.com/nf-test/) and follow standard Nextflow testing patterns.
`;
};

export const validateTestPrompt = `You are a Nextflow test file completer. Your task is to check if the provided test file is complete, and if not, complete it.

Rules:
1. The test file must contain at least one test case
2. Each test case must have a proper setup and teardown
3. The test file must include all necessary imports
4. The test file must follow Nextflow test conventions

If the test file is incomplete, respond with the missing code that should be added to make it valid.
Respond with exactly "true" if the test file is complete.
If not complete, ONLY respond with the missing code + 1 line of code above it.
The response code is to be appended to the end of the test file, minus the last line of code. Provide indentation accordingly.
Do not add explanations, backticks, code blocks, comments, or anything else.


Test file content:
{content}
`;
