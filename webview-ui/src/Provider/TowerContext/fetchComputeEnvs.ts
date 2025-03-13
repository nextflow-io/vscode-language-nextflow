import { apiURL } from "./constants";
import type { WorkspaceID } from "./types";
import type { AuthenticationSession } from "vscode";

const fetchComputeEnvs = async (
  session: AuthenticationSession | null,
  workspaceID: WorkspaceID
) => {
  const params = new URLSearchParams({
    workspaceId: `${workspaceID}`
  });
  const url = `${apiURL}/compute-envs?${params}`;

  try {
    const accessToken = session?.accessToken;
    const res = await fetch(url, {
      credentials: "include",
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      })
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export default fetchComputeEnvs;
