import { FileNode } from "./types";

export function sortFiles(files: FileNode[]) {
  return [...files].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}
