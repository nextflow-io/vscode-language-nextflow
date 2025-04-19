import clsx from "clsx";
import { useState, useEffect } from "react";
import { useWorkspaceContext } from "../../Context";
import styles from "./styles.module.css";
import { FileNode as FileNodeType } from "../../Context/WorkspaceProvider/types";
import folderClosed from "../../images/folder-closed.svg";
import folderOpen from "../../images/folder-open.svg";
import file from "../../images/file.svg";

type Props = {
  node: FileNodeType;
  level?: number;
  searchTerm?: string;
};

const FileNode = ({ node, level = 0, searchTerm }: Props) => {
  const { openFile } = useWorkspaceContext();
  const [expanded, setExpanded] = useState(level < 1);
  const isFolder = !!node.children?.length;

  useEffect(() => {
    if (searchTerm) setExpanded(true);
    if (!searchTerm) setExpanded(level < 1);
  }, [searchTerm]);

  function handleClick() {
    if (hasChildren && !searchTerm) setExpanded((prev) => !prev);
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
  if (isFolder) {
    if (expanded) {
      icon = folderOpen;
      iconClassName = styles.folderIconOpen;
    } else {
      icon = folderClosed;
      iconClassName = styles.folderIconClosed;
    }
  } else {
    icon = file;
    iconClassName = styles.fileIcon;
  }

  return (
    <div
      className={clsx(styles.row, {
        [styles.folder]: isFolder,
        [styles.expanded]: expanded
      })}
    >
      <label className={clsx(styles.item)}>
        <span className={styles.name} onClick={handleClick}>
          <img src={icon} className={clsx(styles.icon, iconClassName)} />
          {node.name}
        </span>
        {hasChildren && <i className="codicon codicon-chevron-right" />}
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
