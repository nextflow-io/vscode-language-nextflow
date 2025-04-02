import { FileNode } from "./types";

async function buildTree(allFiles: FileNode[], node?: FileNode): Promise<any> {
  if (!node) return [];

  if (!node.children) node.children = [];

  for (const nodeName of node.imports) {
    const childNode = allFiles.find((file) => file.name === nodeName);
    if (!childNode) continue;
    const child = await buildTree(allFiles, childNode);
    if (!child) continue;
    node.children.push(child);
  }

  return node;
}

export default buildTree;
