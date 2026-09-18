import clsx from "clsx";
import { useState, useEffect } from "react";
import { useWorkspaceContext } from "../../Context";
import { TreeNode } from "../../Context/WorkspaceProvider/types";
import { ProcessIcon, WorkflowIcon } from "../../icons";
import ItemActions from "../ItemActions";

import styles from "./styles.module.css";

type Props = {
  node: TreeNode;
  level?: number;
  searchTerm?: string;
};

const FileNode = ({ node, level = 0, searchTerm }: Props) => {
  const { findChildren, nodes, openFile, activeFile } = useWorkspaceContext();
  const [expanded, setExpanded] = useState(level < 1);
  const isWorkflow = node.type === "workflow";

  useEffect(() => {
    if (searchTerm) setExpanded(true);
    if (!searchTerm) setExpanded(level < 1);
  }, [searchTerm]);

  // Reveal the active file wherever it sits in the call graph. Collapsing the
  // branch again still works; only a change of active file re-expands it.
  useEffect(() => {
    if (activeFile && hasActiveDescendant(node)) setExpanded(true);
  }, [activeFile, nodes]);

  // The seen set guards against a call graph that revisits a node.
  function hasActiveDescendant(
    node: TreeNode,
    seen = new Set<TreeNode>()
  ): boolean {
    if (seen.has(node)) return false;
    seen.add(node);
    if (node.path === activeFile) return true;
    return findChildren(node).some((child) => hasActiveDescendant(child, seen));
  }

  function handleClick() {
    if (hasChildren && !searchTerm) setExpanded((prev) => !prev);
    openFile(node.path, node.line);
  }

  function isMatch(node: TreeNode): boolean {
    return (
      !searchTerm || node.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  function isRecursiveMatch(node: TreeNode): boolean {
    if (!node || !searchTerm) return true;

    if (isMatch(node)) return true;

    return findChildren(node).some(isRecursiveMatch);
  }

  const children = findChildren(node);
  const filteredChildren = searchTerm
    ? children.filter(isRecursiveMatch)
    : children;

  const hasChildren = filteredChildren.length > 0;
  if (!hasChildren && !isMatch(node)) return null;

  const isActive = activeFile === node.path;
  const Icon = isWorkflow ? WorkflowIcon : ProcessIcon;
  const iconClassName = isWorkflow ? styles.workflowIcon : styles.processIcon;

  return (
    <div
      className={clsx(styles.row, {
        [styles.workflow]: isWorkflow,
        [styles.expanded]: expanded
      })}
    >
      <div
        className={clsx(styles.item, { [styles.active]: isActive })}
        data-active={isActive || undefined}
      >
        <span className={styles.name} onClick={handleClick}>
          <Icon className={clsx(styles.icon, iconClassName)} />
          <span className={styles.text}>{node.name}</span>
        </span>
        {!isWorkflow && <ItemActions node={node} />}
        {hasChildren && (
          <i
            className="codicon codicon-chevron-right"
            onClick={() => setExpanded((prev) => !prev)}
          />
        )}
      </div>
      {hasChildren && expanded && (
        <div className={styles.children}>
          {filteredChildren.map((child) => (
            <FileNode
              key={child.name}
              node={child}
              level={level + 1}
              searchTerm={searchTerm}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileNode;
