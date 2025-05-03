import fetchContent from "../createTest/fetchContent";
import { getPrompt } from "./prompt";

async function generateRequirements(
  content: string,
  token: string,
  onChunk?: (chunk: string) => void
): Promise<string> {
  const prompt = getPrompt(content);

  try {
    const response = await fetchContent(prompt, token, onChunk);
    return response;
  } catch (error) {
    console.error("🟠 Error generating requirements:", error);
    throw error;
  }
}

export default generateRequirements;
