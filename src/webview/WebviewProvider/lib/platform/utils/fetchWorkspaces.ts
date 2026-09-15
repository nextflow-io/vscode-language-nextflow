import type { Workspace } from "../../../../../shared/types";
import { SEQERA_API_URL } from "../../../../../shared/constants";

const fetchWorkspaces = async (
  token: string,
  userID: number
): Promise<Workspace[]> => {
  if (!token) return [];
  try {
    const response = await fetch(
      `${SEQERA_API_URL}/user/${userID}/workspaces`,
      {
        credentials: "include",
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        })
      }
    );
    console.log("🟣 fetchWorkspaces", response.status);
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
