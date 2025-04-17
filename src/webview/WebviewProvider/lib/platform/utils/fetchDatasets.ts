import { SEQERA_API_URL } from "../../../../../constants";
import type { Dataset } from "../types";

const fetchDatasets = async (
  token: string,
  workspaceId: number
): Promise<Dataset[]> => {
  if (!token) return [];
  try {
    const response = await fetch(
      `${SEQERA_API_URL}/datasets?workspaceId=${workspaceId}`,
      {
        credentials: "include",
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        })
      }
    );
    console.log("🟢 fetchDatasets", response.status);
    const res = (await response.json()) as { datasets: Dataset[] };
    return res?.datasets || [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default fetchDatasets;
