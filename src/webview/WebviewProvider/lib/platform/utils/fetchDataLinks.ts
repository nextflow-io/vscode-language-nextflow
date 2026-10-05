import type { DataLink, DataLinksResponse } from "../../../../../shared/types";
import { SEQERA_API_URL } from "../../../../../shared/constants";

const fetchDataLinks = async (
  token: string,
  workspaceId: number
): Promise<DataLink[]> => {
  if (!token) return [];
  try {
    const response = await fetch(
      `${SEQERA_API_URL}/data-links?workspaceId=${workspaceId}`,
      {
        credentials: "include",
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        })
      }
    );
    console.log("🟢 fetchDataLinks", response.status);
    const res = (await response.json()) as DataLinksResponse;
    return res?.dataLinks || [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default fetchDataLinks;
