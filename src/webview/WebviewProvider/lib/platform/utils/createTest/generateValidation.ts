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

    console.log("🟢 AI validation response:", response);
  } catch (error) {
    console.log("🟢 AI validation error:", error);
    return "Error validating test file. Please check manually.";
  }
}

export default generateValidation;
