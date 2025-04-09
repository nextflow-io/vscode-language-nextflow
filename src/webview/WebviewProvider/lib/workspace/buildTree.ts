import { FileNode } from "./types";

function getShortestPath(allFiles: FileNode[]): FileNode {
  return allFiles.reduce((shortest, current) => {
    if (!shortest)
      return current;
    return current.filePath.length < shortest.filePath.length
      ? current
      : shortest;
  });
}

function buildTree(
  allFiles: FileNode[],
  processedNodes = new Set<string>(),
  currentNode?: FileNode
): FileNode | null {
  const node = currentNode ?? getShortestPath(allFiles);

  if (!node)
    return null;

  if (processedNodes.has(node.name))
    return node;
  processedNodes.add(node.name);

  if (!node.children)
    node.children = [];

  for (const nodeName of node.imports) {
    const childNode = allFiles.find((file) => file.name === nodeName);
    if (!childNode) continue;
    const child = buildTree(allFiles, processedNodes, childNode);
    if (!child) continue;
    node.children.push(child);
  }

  return node;
}

export default buildTree;
