import fetchContent from "./fetchContent";
import { getPrompt } from "./prompt";

async function generateTest(
  content: string,
  token: string,
  onChunk?: (chunk: string) => void
): Promise<string> {
  const initialPrompt = getPrompt(content);

  try {
    const response = await fetchContent(initialPrompt, token, onChunk);
    return response;
  } catch (error) {
    console.error("🟠 Error generating nf-test:", error);
    throw error;
  }
}

export default generateTest;
