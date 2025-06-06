import { SEQERA_API_URL } from "../../../../../constants";
import { AddPipelineRequest } from "../hubTypes";

type Message = {
  requestBody: AddPipelineRequest;
};

const addPipeline = async (
  accessToken: string,
  message: Message
): Promise<Response> => {
  const { requestBody } = message;
  const { workspaceId } = requestBody.launch;
  console.log("🟢 addPipeline", requestBody);

  return await fetch(`${SEQERA_API_URL}/pipelines?workspaceId=${workspaceId}`, {
    credentials: "include",
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }),
    body: JSON.stringify(requestBody)
  });
};

export default addPipeline;
