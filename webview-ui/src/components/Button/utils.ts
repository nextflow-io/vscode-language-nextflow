export function shouldAdjustIconSize(icon: string) {
  const exceptions = ["account", "github"];
  for (const exception of exceptions) {
    if (icon.includes(exception)) {
      return false;
    }
  }
  return true;
}
