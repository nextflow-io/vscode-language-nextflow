import type { PipelinesResponse } from "../../../../../shared/types";
import { SEQERA_API_URL } from "../../../../../shared/constants";

const fetchPipelines = async (
  token: string,
  workspaceId: number
): Promise<PipelinesResponse> => {
  if (!token) return { pipelines: [], totalSize: 0 };
  try {
    const response = await fetch(
      `${SEQERA_API_URL}/pipelines?workspaceId=${workspaceId}`,
      {
        credentials: "include",
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        })
      }
    );
    console.log("🟣 fetchPipelines", response.status);
    const res = (await response.json()) as PipelinesResponse;
    return res || { pipelines: [], totalSize: 0 };
  } catch (e) {
    console.error(e);
    return { pipelines: [], totalSize: 0 };
  }
};

export default fetchPipelines;
