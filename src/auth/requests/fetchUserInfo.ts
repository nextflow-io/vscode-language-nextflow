import { apiURL } from "./constants";
import type { UserProfile } from "./types";

const fetchUserInfo = async (token: string): Promise<UserProfile | null> => {
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
    return (await response.json()) as UserProfile;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchUserInfo;
