import type { Workspace } from "./types";

const fetchWorkspaces = async (
  apiURL: string,
  userID: number
): Promise<Workspace[]> => {
  try {
    const response = await fetch(`${apiURL}/user/${userID}/workspaces`, {
      credentials: "include",
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const res = await response.json();
    const workspaces = res.orgsAndWorkspaces || [];
    return workspaces.filter((ws: Workspace) => ws.orgName !== "community");
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default fetchWorkspaces;
