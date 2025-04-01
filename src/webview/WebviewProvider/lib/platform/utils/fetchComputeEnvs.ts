import { API_URL } from "../../../../../constants";
import type { Workspace, ComputeEnv } from "./types";

const fetchComputeEnvs = async (
  token: string,
  workspaces: Workspace[]
): Promise<ComputeEnv[]> => {
  console.log("🟢🟣 fetchComputeEnvs", workspaces);
  if (!token) return [];
  const workspace = workspaces.find((w) => !!w.workspaceId);
  const workspaceID = workspace?.workspaceId;
  if (!workspaceID) return [];

  const params = new URLSearchParams({
    workspaceId: `${workspaceID}`
  });
  const url = `${API_URL}/compute-envs?${params}`;

  try {
    const res = await fetch(url, {
      credentials: "include",
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      })
    });
    console.log("🟣 fetchComputeEnvs", res.status);
    const data = await res.json();
    return data as ComputeEnv[];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default fetchComputeEnvs;
