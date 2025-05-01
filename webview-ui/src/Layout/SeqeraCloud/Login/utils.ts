export function formatTime(tokenExpiry?: number) {
  if (!tokenExpiry) return "";
  return new Date(tokenExpiry * 1000).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
}
