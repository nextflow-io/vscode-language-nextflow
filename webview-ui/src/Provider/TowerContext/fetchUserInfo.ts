import { apiURL } from "./constants";
import type { UserProfile } from "./types";
import type { AuthenticationSession } from "vscode";

const fetchUserInfo = async (
  session: AuthenticationSession | null
): Promise<UserProfile | null> => {
  if (!session) return null;
  try {
    const accessToken = session.accessToken;
    const response = await fetch(`${apiURL}/user-info`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (response.status === 401) {
      throw new Error("Unauthorized");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchUserInfo;
