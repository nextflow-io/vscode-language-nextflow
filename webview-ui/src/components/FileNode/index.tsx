import clsx from "clsx";
import { useState, useEffect } from "react";
import { useWorkspaceContext } from "../../Context";
import { TreeNode } from "../../Context/WorkspaceProvider/types";
import processIcon from "../../images/process.svg";
import workflowIcon from "../../images/workflow.svg";
import styles from "./styles.module.css";

type Props = {
  node: TreeNode;
  level?: number;
  searchTerm?: string;
};

const FileNode = ({ node, level = 0, searchTerm }: Props) => {
  const { findChildren, openFile } = useWorkspaceContext();
  const [expanded, setExpanded] = useState(level < 1);
  const isWorkflow = node.type === "workflow";

  useEffect(() => {
    if (searchTerm) setExpanded(true);
    if (!searchTerm) setExpanded(level < 1);
  }, [searchTerm]);

  function handleClick() {
    if (hasChildren && !searchTerm)
      setExpanded((prev) => !prev);
    openFile(node.path, node.line);
  }

  function isMatch(node: TreeNode): boolean {
    return !searchTerm || node.name.toLowerCase().includes(searchTerm.toLowerCase());
  }

  function isRecursiveMatch(node: TreeNode): boolean {
    if (!node || !searchTerm)
      return true;

    if (isMatch(node))
      return true;

    return findChildren(node).some(isRecursiveMatch);
  };

  const children = findChildren(node);
  const filteredChildren = searchTerm
    ? children.filter(isRecursiveMatch)
    : children;

  const hasChildren = filteredChildren.length > 0;
  if (!hasChildren && !isMatch(node))
    return null;

  const icon = isWorkflow ? workflowIcon : processIcon;
  const iconClassName = isWorkflow ? styles.workflowIcon : styles.processIcon;

  return (
    <div
      className={clsx(styles.row, {
        [styles.workflow]: isWorkflow,
        [styles.expanded]: expanded
      })}
    >
      <label className={clsx(styles.item)}>
        <span className={styles.name} onClick={handleClick}>
          <img src={icon} className={clsx(styles.icon, iconClassName)} />
          {node.name}
        </span>
        {hasChildren && (
          <i className="codicon codicon-chevron-right" />
        )}
      </label>
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
