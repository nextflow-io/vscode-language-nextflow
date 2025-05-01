import fetchContent from "./fetchContent";
import { systemPrompt, getUserPrompt } from "./prompt";

async function generateTest(
  content: string,
  token: string,
  onChunk?: (chunk: string) => void
): Promise<string> {
  const userMessage = getUserPrompt(content);
  const fullPrompt = `:::details\n\n${systemPrompt}\n\n${userMessage}\n\n:::\n\n`;

  try {
    const response = await fetchContent(fullPrompt, token, onChunk);
    return response;
  } catch (error) {
    console.error("🟠 Error generating nf-test:", error);
    throw error;
  }
}

export default generateTest;
