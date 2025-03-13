import type { Pipeline, ComputeEnv, WorkspaceID } from "./types";
import type { FormData } from "./types";

const addPipeline = async (
  apiURL: string,
  pipeline: Pipeline,
  workspaceID: WorkspaceID,
  computeEnv: ComputeEnv | undefined,
  formData: FormData
): Promise<Response> => {
  const name = formData.name || pipeline.name;
  const description = formData.description;

  const launchConfig = pipeline.launch_config || {};
  let envConfig = {};
  if (computeEnv)
    envConfig = {
      workDir: computeEnv.workDir,
      computeEnvId: computeEnv.id
    };

  return await fetch(`${apiURL}/pipelines?workspaceId=${workspaceID}`, {
    credentials: "include",
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
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
