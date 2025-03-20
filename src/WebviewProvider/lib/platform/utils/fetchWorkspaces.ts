import type { Workspace } from "./types";
import { API_URL } from "../../../../constants";

const fetchWorkspaces = async (
  token: string,
  userID: number
): Promise<Workspace[]> => {
  console.log("🟣 fetchWorkspaces", token, userID);
  if (!token) return [];
  try {
    const response = await fetch(`${API_URL}/user/${userID}/workspaces`, {
      credentials: "include",
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      })
    });
    const res = (await response.json()) as {
      orgsAndWorkspaces: Workspace[];
    };
    const workspaces = res.orgsAndWorkspaces || [];
    return workspaces.filter((ws: Workspace) => ws.orgName !== "community");
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default fetchWorkspaces;
