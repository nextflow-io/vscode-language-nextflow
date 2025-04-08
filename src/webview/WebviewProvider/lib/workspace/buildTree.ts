import { FileNode } from "./types";

async function buildTree(
  allFiles: FileNode[],
  processedNodes = new Set<string>(),
  currentNode?: FileNode,
  isChild?: boolean
): Promise<any> {
  let node = currentNode;
  if (!isChild)
    node = allFiles.reduce((shortest, current) => {
      if (!shortest) return current;
      return current.filePath.length < shortest.filePath.length
        ? current
        : shortest;
    }, allFiles[0]);

  if (!node) return [];

  if (processedNodes.has(node.name)) {
    return node;
  }
  processedNodes.add(node.name);

  if (!node.children) node.children = [];

  for (const nodeName of node.imports) {
    const childNode = allFiles.find((file) => file.name === nodeName);
    if (!childNode) continue;
    const child = await buildTree(allFiles, processedNodes, childNode, true);
    if (!child) continue;
    node.children.push(child);
  }

  return node;
}

export default buildTree;
