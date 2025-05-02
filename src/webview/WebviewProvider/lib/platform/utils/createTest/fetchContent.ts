import { INTERN_API_URL } from "../../../../../../constants";
import { systemPrompt } from "./prompt";

async function fetchContent(
  prompt: string,
  token: string,
  onChunk?: (chunk: string) => void
): Promise<string> {
  try {
    const fullPrompt = `:::details\n\n${systemPrompt}\n\n${prompt}\n\n:::\n\n`;
    const url = `${INTERN_API_URL}/internal-ai/query`;

    const response = await fetch(url, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        message: fullPrompt,
        stream: true,
        tags: ["multiqc"],
        title: "NF-Test Generation"
      })
    });

    // If it's not a stream response, try to get the error message
    if (
      !response.ok &&
      response.headers.get("content-type")?.includes("application/json")
    ) {
      const errorData = await response.json();
      console.log("🟢 fetchContent error response:", errorData);
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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
          try {
            const data = JSON.parse(line.slice(6));
            if (data.content) {
              fullResponse += data.content;
              // Call the onChunk callback if provided
              if (onChunk) {
                onChunk(data.content);
              }
            }
          } catch (e) {
            console.log("🟢 Error parsing SSE data:", e);
          }
        }
      }
    }

    return fullResponse;
  } catch (error) {
    console.log("🟢 fetchContent error:", error);
    throw error;
  }
}

export default fetchContent;
