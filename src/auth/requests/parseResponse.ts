import type { PipelineResponse } from "./types";

type Result = {
  error?: string;
  message?: string;
  data?: PipelineResponse;
};

async function parseResponse(response: Response): Promise<Result> {
  // The API response is inconsistent:
  // Sometimes doesn't respond with JSON
  // Sometimes returns a message (which means something went wrong)
  // Sometimes returns detail, which is stringified JSON (an error)
  // Sometimes returns 200 when it shouldn't... 😅
  const result: Result = {};
  let res: PipelineResponse;
  try {
    res = await response.json();
  } catch (error) {
    console.error(error);
    result.error = "API did not return a valid response";
    return result;
  }

  if (response.status !== 200) {
    result.error = "Something went wrong";
    if (res?.message) result.error = res.message;
    if (res?.detail) {
      try {
        const detail = JSON.parse(res.detail);
        const message = detail?.message;
        if (message) result.error = message;
      } catch (e) {
        console.error(e);
      }
    }
    return result;
  }

  if (res?.message) {
    // Something still went wrong
    result.error = res.message;
    return result;
  }

  result.message = "Pipeline added successfully";
  result.data = res;
  return result;
}

export default parseResponse;
