import { FileNode } from "./types";

async function buildTree(
  allFiles: FileNode[],
  node?: FileNode,
  processedNodes = new Set<string>()
): Promise<any> {
  if (!node) return [];

  // If we've already processed this node, return it to avoid infinite recursion
  if (processedNodes.has(node.name)) {
    return node;
  }
  processedNodes.add(node.name);

  if (!node.children) node.children = [];

  for (const nodeName of node.imports) {
    const childNode = allFiles.find((file) => file.name === nodeName);
    if (!childNode) continue;
    const child = await buildTree(allFiles, childNode, processedNodes);
    if (!child) continue;
    node.children.push(child);
  }

  return node;
}

export default buildTree;
