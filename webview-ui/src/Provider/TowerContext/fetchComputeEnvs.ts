import type { WorkspaceID } from "./types";

const fetchComputeEnvs = async (apiURL: string, workspaceID: WorkspaceID) => {
  const params = new URLSearchParams({
    workspaceId: `${workspaceID}`,
  });
  const url = `${apiURL}/compute-envs?${params}`;

  try {
    const res = await fetch(url, {
      credentials: "include",
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export default fetchComputeEnvs;
