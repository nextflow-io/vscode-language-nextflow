import { apiURL } from "./constants";
import type { UserInfo } from "./types";

const fetchUserInfo = async (token: string): Promise<UserInfo | null> => {
  if (!token) return null;
  try {
    const response = await fetch(`${apiURL}/user-info`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("🟣 fetchUserInfo 2 res", response.json());
    console.log("🟣 fetchUserInfo 2 token", token);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    }
    return (await response.json()) as UserInfo;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchUserInfo;
