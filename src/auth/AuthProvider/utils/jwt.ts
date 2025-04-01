import { jwtDecode } from "jwt-decode";

function jwtExpired(token?: string): boolean {
  if (!token) return true;
  const decoded = jwtDecode(token);
  return expired(decoded.exp);
}

function expired(timestamp?: number): boolean {
  if (!timestamp) return true;
  const currentTime = Date.now() / 1000;
  return timestamp < currentTime;
}

function decodeJWT(token?: string): any {
  if (!token) return null;
  return jwtDecode(token);
}

export { jwtExpired, decodeJWT, expired };
