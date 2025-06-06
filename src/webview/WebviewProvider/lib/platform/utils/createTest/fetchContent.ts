import { SEQERA_INTERN_API_URL } from "../../../../../../constants";
import { responseSchema, systemPrompt } from "./prompt";

async function fetchContent(
  prompt: string,
  token: string,
  onChunk?: (chunk: string) => void,
  tags = ["test-generation"]
): Promise<string> {
  try {
    const fullPrompt = `:::details\n\n${systemPrompt}\n\n${prompt}\n\n:::\n\n`;
    const url = `${SEQERA_INTERN_API_URL}/internal-ai/query`;

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
        tags,
        title: tags[0],
        response_schema: responseSchema
      })
    });

    console.log("🟢 response:", response);

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

            // Handle different message types
            if (data.type === "on_chat_model_stream" && data.content) {
              // Handle tool use or other content in the stream
              for (const content of data.content) {
                if (content.type === "tool_use" && content.partial_json) {
                  try {
                    const jsonData = JSON.parse(content.partial_json);
                    if (jsonData.generation?.code) {
                      fullResponse += jsonData.generation.code;
                      if (onChunk) {
                        onChunk(jsonData.generation.code);
                      }
                    }
                  } catch (e) {
                    // Ignore parsing errors for partial JSON
                  }
                }
              }
            } else if (data.type === "on_chain_stream") {
              // Handle chain stream messages if needed
            } else if (data.type === "on_chat_model_end") {
              // Log model metadata and response details
              console.log("🟢 Chat model end:", {
                model: data.metadata?.ls_model_name,
                temperature: data.metadata?.ls_temperature,
                stopReason: data.response_metadata?.stop_reason,
                runId: data.run_id
              });
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
