import clsx from "clsx";
import { useState, useEffect } from "react";
import { useWorkspaceContext } from "../../Context";
import styles from "./styles.module.css";
import { FileNode as FileNodeType } from "../../Context/WorkspaceProvider/types";
import processIcon from "../../images/process.svg";
import workflowIcon from "../../images/workflow.svg";

type Props = {
  node: FileNodeType;
  level?: number;
  searchTerm?: string;
};

const FileNode = ({ node, level = 0, searchTerm }: Props) => {
  const { openFile } = useWorkspaceContext();
  const [expanded, setExpanded] = useState(level < 1);
  const isWorkflow = !!node.children?.length;
  const isFolder = isWorkflow && level > 0;

  useEffect(() => {
    if (searchTerm) setExpanded(true);
    if (!searchTerm) setExpanded(level < 1);
  }, [searchTerm]);

  function handleClick() {
    if (isFolder && !searchTerm) setExpanded((prev) => !prev);
    openFile(node);
  }

  const hasAnyMatchingDescendant = (node: FileNodeType): boolean => {
    if (!searchTerm) return true;

    const nodeMatches = node.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (nodeMatches) return true;

    return (
      node.children?.some((child) => hasAnyMatchingDescendant(child)) || false
    );
  };

  const filteredChildren = node.children?.filter((child) => {
    if (searchTerm) {
      return hasAnyMatchingDescendant(child);
    }
    return true;
  });

  const hasChildren = !!filteredChildren?.length;

  let isMatch = true;
  if (searchTerm) {
    isMatch = node.name.toLowerCase().includes(searchTerm?.toLowerCase() || "");
  }
  if (!hasChildren && !isMatch) return null;

  let icon = null;
  let iconClassName = "";
  if (isWorkflow) {
    icon = workflowIcon;
    iconClassName = styles.workflowIcon;
  } else {
    icon = processIcon;
    iconClassName = styles.processIcon;
  }

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
        {hasChildren && isFolder && (
          <i className="codicon codicon-chevron-right" />
        )}
      </label>
      {hasChildren && expanded && (
        <div className={styles.children}>
          {node.children?.map((child) => (
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
