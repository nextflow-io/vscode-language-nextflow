import { INTERN_API_URL } from "../../../../../../constants";
import { systemPrompt, getUserPrompt } from "./prompt";

interface ChatRequest {
  message: string;
  stream: boolean;
  tags: string[];
  title: string;
}

async function generateTest(content: string, token: string): Promise<string> {
  const userMessage = getUserPrompt(content);
  const request: ChatRequest = {
    message: `:::details\n\n${systemPrompt}\n\n${userMessage}\n\n:::\n\n`,
    stream: true,
    tags: ["multiqc"], // TODO: Add nf-test as a valid external source
    title: "NF-Test Generation"
  };

  try {
    const response = await fetch(`${INTERN_API_URL}/internal-ai/query`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(request)
    });

    // If it's not a stream response, try to get the error message
    if (
      !response.ok &&
      response.headers.get("content-type")?.includes("application/json")
    ) {
      const errorData = await response.json();
      console.log("🟠 nf-test error response:", errorData);
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Handle the streaming response
    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error("No reader available");
    }

    let fullResponse = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      // Convert the chunk to text
      const chunk = new TextDecoder().decode(value);

      // Parse the SSE data
      const lines = chunk.split("\n");
      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = JSON.parse(line.slice(6));
          if (data.content) {
            fullResponse += data.content;
          }
        }
      }
    }

    return fullResponse;
  } catch (error) {
    console.error("🟠 Error generating nf-test:", error);
    throw error;
  }
}

export default generateTest;
