export const systemPrompt = `You ONLY output code for nf-tests, nothing else. Do not include backticks or code blocks. You do not output any other text such as explanations, or anything else. You output pure code.`;

export const getPrompt = (fileContents: string) => {
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

export const getValidationPrompt = (testFileContents: string) => {
  return `
Check whether the following nf-test file appears to have finished being generated.
If it looks valid and does not have anything missing at the end, respond with exactly "" (an empty string).
If it has not finished generating, continue with the generation process and respond with the missing code that needs to be added to make it valid.
Do respond with anything but pure code needed to complete the test file (no comments or backticks).
Your response MUST start precisely from the last character of the following test file:

${testFileContents}
`;
};
