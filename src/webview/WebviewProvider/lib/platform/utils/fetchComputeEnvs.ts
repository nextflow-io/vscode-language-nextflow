import { SEQERA_API_URL } from "../../../../../shared/constants";
import type { WorkspaceID, ComputeEnv } from "../../../../../shared/types";

const fetchComputeEnvs = async (
  token: string,
  workspaceId: WorkspaceID
): Promise<ComputeEnv[]> => {
  if (!token) return [];

  try {
    const url = `${SEQERA_API_URL}/compute-envs?workspaceId=${workspaceId}`;
    const res = await fetch(url, {
      credentials: "include",
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      })
    });
    const data = (await res.json()) as { computeEnvs: ComputeEnv[] };
    return data?.computeEnvs || ([] as ComputeEnv[]);
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default fetchComputeEnvs;
