import { validateTestPrompt } from "./prompt";
import fetchContent from "./fetchContent";

async function doubleCheck(
  content: string,
  token: string
): Promise<string | true> {
  try {
    const prompt = validateTestPrompt.replace("{content}", content);
    const response = await fetchContent(prompt, token);

    // If the response is exactly "true", return true
    if (response.trim() === "true") {
      return true;
    }

    // Otherwise, return the suggested improvements
    return response;
  } catch (error) {
    console.log("🟢 doubleCheck error:", error);
    return "Error validating test file. Please check manually.";
  }
}

export default doubleCheck;
