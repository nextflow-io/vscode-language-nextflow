import type { ComputeEnv, LaunchConfig } from "../types";
import { SEQERA_API_URL } from "../../../../../constants";

export type FormData = {
  name: string;
  description: string;
  url: string;
  launch_config: LaunchConfig;
  workspaceId: string;
};

type Message = {
  computeEnv: ComputeEnv;
  formData: FormData;
};

const addPipeline = async (
  accessToken: string,
  message: Message
): Promise<Response> => {
  const { formData, computeEnv } = message;
  const name = formData.name;
  const description = formData.description;

  const launchConfig = formData.launch_config || {};
  const workspaceId = formData.workspaceId || "";
  const envConfig = {
    workDir: computeEnv?.workDir || "",
    computeEnvId: computeEnv?.id || ""
  };

  return await fetch(`${SEQERA_API_URL}/pipelines?workspaceId=${workspaceId}`, {
    credentials: "include",
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }),
    body: JSON.stringify({
      name,
      description,
      launch: {
        ...launchConfig,
        ...envConfig,
        pipeline: formData.url || "",
        workspaceId: workspaceId
      }
    })
  });
};

export default addPipeline;
