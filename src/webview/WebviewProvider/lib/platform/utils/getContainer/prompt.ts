export const systemPrompt = `You ONLY output pure CSV, nothing else. Do not include backticks or code blocks. You do not output any other text such as explanations, or anything else. You output pure CSV.`;

export const getPrompt = (fileContents: string) => {
  return `
Analyze the following code, and determine which packages would be required to make a Wave container for it.
Your response should be in the format of "channel::package=version,channel::package=version".
For example: "bioconda::bcftools=1.2,pip:numpy==2.0.0rc1,bioconda::bioconductor-iranges=2.36.0"

Here is the code:
${fileContents}
`;
};
