import type { HubPipeline } from "./hubTypes";

import { SEQERA_HUB_API_URL } from "../../../../constants";

const fetchPipelines = async (): Promise<HubPipeline[]> => {
  const response = await fetch(`${SEQERA_HUB_API_URL}/pipelines`, {
    credentials: "include",
    method: "GET",
    headers: new Headers({ "content-type": "application/json" })
  });

  const data = await response.json();
  const { status } = response;

  if (status !== 200) {
    console.error(status, data);
    return [];
  }

  return data as HubPipeline[];
};

export default fetchPipelines;
