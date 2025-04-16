import type { WorkflowsResponse } from "./types";
import { SEQERA_API_URL } from "../../../../../constants";

const fetchHistory = async (
  token: string,
  workspaceId: number
): Promise<WorkflowsResponse> => {
  if (!token) return { workflows: [], totalSize: 0 };
  try {
    const response = await fetch(
      `${SEQERA_API_URL}/workflow?workspaceId=${workspaceId}`,
      {
        credentials: "include",
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        })
      }
    );
    console.log("🟣 fetchWorkflows", response.status);
    const res = (await response.json()) as WorkflowsResponse;
    return res || { workflows: [], totalSize: 0 };
  } catch (e) {
    console.error(e);
    return { workflows: [], totalSize: 0 };
  }
};

export default fetchHistory;
