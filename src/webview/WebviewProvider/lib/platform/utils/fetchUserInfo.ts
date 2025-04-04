import { API_URL } from "../../../../../constants";
import type { UserInfoResponse } from "./types";

const fetchUserInfo = async (token: string): Promise<UserInfoResponse> => {
  if (!token) return { message: "No token found" } as UserInfoResponse;
  try {
    const response = await fetch(`${API_URL}/user-info`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("🟣 fetchUserInfo", response.status);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    }
    const res = (await response.json()) as UserInfoResponse;
    return res;
  } catch (error) {
    console.error(error);
    return { message: "Could not fetch user info" } as UserInfoResponse;
  }
};

export default fetchUserInfo;
