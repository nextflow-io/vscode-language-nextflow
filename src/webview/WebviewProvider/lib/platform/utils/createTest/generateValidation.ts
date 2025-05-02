import { getValidationPrompt } from "./prompt";
import fetchContent from "./fetchContent";

async function generateValidation(
  content: string,
  token: string,
  onChunk?: (chunk: string) => void
) {
  try {
    const prompt = getValidationPrompt(content);
    const response = await fetchContent(prompt, token, onChunk);
    return response;
  } catch (error) {
    return "Error validating test file. Please check manually.";
  }
}

export default generateValidation;
