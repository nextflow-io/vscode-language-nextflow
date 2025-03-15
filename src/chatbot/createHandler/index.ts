import * as vscode from "vscode";
import * as chatUtils from "@vscode/chat-extension-utils";
import { BASE_PROMPT, NF_TEST_PROMPT, DSL2_PROMPT } from "../prompts";
import { getFileContext } from "../utils/getContext";
import getChatHistory from "../utils/getChatHistory";

import type { TrackEvent } from "../../telemetry";

type PromptKey = string;

const prompts: Record<PromptKey, string> = {
  "nf-test": NF_TEST_PROMPT,
  dsl2: DSL2_PROMPT,
  default: BASE_PROMPT
};

/**
 * Builds the initial messages for the conversation, including:
 *  1. System prompt
 *  2. File context (references)
 *  3. Previous chat history
 * @param request - The vscode.ChatRequest
 * @param context - The vscode.ChatContext
 * @param systemPrompt - Resolved system prompt (BASE_PROMPT or other)
 */
async function buildInitialMessages(
  request: vscode.ChatRequest,
  context: vscode.ChatContext,
  systemPrompt: string
): Promise<vscode.LanguageModelChatMessage[]> {
  const messages: vscode.LanguageModelChatMessage[] = [];

  // Add the system prompt as the first user message (depending on your usage,
  // you might treat it as System or Assistant message, but here we keep consistent with your existing pattern).
  messages.push(vscode.LanguageModelChatMessage.User(systemPrompt));

  // Add context from any referenced files
  if (request.references && request.references.length > 0) {
    const fileContents = await getFileContext(request.references);
    if (fileContents && fileContents.trim().length > 0) {
      const filesPrompt = `Here are the files attached to this message:\n<open_files>\n${fileContents}\n</open_files>`;
      messages.push(vscode.LanguageModelChatMessage.User(filesPrompt));
    }
  }

  // Add previous chat messages
  const previousMessages = getChatHistory(
    context.history.filter(
      (m) => m instanceof vscode.ChatResponseTurn
    ) as vscode.ChatResponseTurn[]
  );
  messages.push(...previousMessages);

  return messages;
}

/**
 * Creates and returns a chat request handler for VS Code chat interactions.
 * It handles building context, managing chat history, and streaming responses.
 */
export function createHandler(trackEvent: TrackEvent): vscode.ChatRequestHandler {
  return async (
    request: vscode.ChatRequest,
    context: vscode.ChatContext,
    stream: vscode.ChatResponseStream,
    token: vscode.CancellationToken
  ) => {
    trackEvent("sentMessage", {
      messageLength: request.prompt.length,
      command: request.command || "default",
      referencesCount: request.references?.length ?? 0
    });

    const command = request.command || "default";
    const prompt = prompts[command] || prompts["default"];
    const messages = await buildInitialMessages(request, context, prompt);

    messages.push(vscode.LanguageModelChatMessage.User(request.prompt));

    const libResult = chatUtils.sendChatParticipantRequest(
      request,
      context,
      {
        prompt,
        tools: vscode.lm.tools,
        responseStreamOptions: {
          stream,
          references: true,
          responseText: true
        }
      },
      token
    );

    return libResult.result;
  };
};
