import type { Pipeline, ComputeEnv, WorkspaceID } from "./types";
import type { FormData } from "./types";
import type { AuthenticationSession } from "vscode";
import { SEQERA_API_URL } from "../../../../../constants";

const addPipeline = async (
  session: AuthenticationSession | null,
  pipeline: Pipeline,
  workspaceID: WorkspaceID,
  computeEnv: ComputeEnv | undefined,
  formData: FormData
): Promise<Response> => {
  const accessToken = session?.accessToken;
  const name = formData.name || pipeline.name;
  const description = formData.description;

  const launchConfig = pipeline.launch_config || {};
  let envConfig = {};
  if (computeEnv)
    envConfig = {
      workDir: computeEnv.workDir,
      computeEnvId: computeEnv.id
    };

  return await fetch(`${SEQERA_API_URL}/pipelines?workspaceId=${workspaceID}`, {
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
        pipeline: pipeline.url,
        workspaceId: workspaceID || ""
      }
    })
  });
};

export default addPipeline;
