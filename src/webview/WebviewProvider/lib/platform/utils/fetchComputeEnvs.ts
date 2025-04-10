import { SEQERA_API_URL } from "../../../../../constants";
import type { Workspace, ComputeEnv } from "./types";

const fetchComputeEnvs = async (
  token: string,
  orgsAndWorkspaces: Workspace[]
): Promise<ComputeEnv[]> => {
  if (!token) return [];

  const workspaces = orgsAndWorkspaces.filter((w) => !!w.workspaceId);
  if (workspaces.length === 0) return [];

  try {
    const results = await Promise.all(
      workspaces.map(async (workspace) => {
        const params = new URLSearchParams({
          workspaceId: `${workspace.workspaceId}`
        });
        const url = `${SEQERA_API_URL}/compute-envs?${params}`;

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
      })
    );

    return results.flat();
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default fetchComputeEnvs;
