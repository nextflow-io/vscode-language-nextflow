import type { Workspace } from "./types";
import type { AuthenticationSession } from "vscode";
import { apiURL } from "./constants";

const fetchWorkspaces = async (
  session: AuthenticationSession | null,
  userID: number
): Promise<Workspace[]> => {
  if (!session) return [];
  try {
    const accessToken = session?.accessToken;
    const response = await fetch(`${apiURL}/user/${userID}/workspaces`, {
      credentials: "include",
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
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
