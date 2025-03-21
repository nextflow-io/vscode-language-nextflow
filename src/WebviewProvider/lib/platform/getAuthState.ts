import { jwtExpired, decodeJWT } from "../../../AuthProvider/utils/jwt";

export type AuthState = {
  hasToken: boolean;
  tokenExpired: boolean;
  tokenExpiry: number;
  isAuthenticated: boolean;
  error: string;
};

const getAuthState = async (token?: string): Promise<AuthState> => {
  const hasToken = !!token;
  let tokenExpired = false;
  let tokenExpiry: any = 0;
  if (typeof token === "string") {
    const decoded = decodeJWT(token);
    tokenExpiry = decoded.exp;
    tokenExpired = jwtExpired(token);
  }
  const isAuthenticated = hasToken && !tokenExpired;
  const error = "";
  return { hasToken, tokenExpired, tokenExpiry, isAuthenticated, error };
};

export default getAuthState;
