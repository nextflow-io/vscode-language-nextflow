import { jwtDecode } from "jwt-decode";

function jwtExpired(token?: string): boolean {
  if (!token) return true;
  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  if (!decoded.exp) return true;
  return decoded.exp < currentTime;
}

function decodeJWT(token?: string): any {
  if (!token) return null;
  return jwtDecode(token);
}

export { jwtExpired, decodeJWT };
