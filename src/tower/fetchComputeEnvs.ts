import { apiURL } from "./constants";
import type { WorkspaceID } from "./types";

const fetchComputeEnvs = async (token: string, workspaceID: WorkspaceID) => {
  if (!token) return [];

  const params = new URLSearchParams({
    workspaceId: `${workspaceID}`
  });
  const url = `${apiURL}/compute-envs?${params}`;

  try {
    const res = await fetch(url, {
      credentials: "include",
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      })
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export default fetchComputeEnvs;
