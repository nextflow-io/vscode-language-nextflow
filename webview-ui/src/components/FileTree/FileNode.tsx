import clsx from "clsx";
import { useState } from "react";
import { useWorkspaceContext } from "../../Context";
import styles from "./styles.module.css";
import { FileNode as FileNodeType } from "../../Context/WorkspaceProvider/types";

type Props = {
  node: FileNodeType;
  level?: number;
};

const FileNode = ({ node, level = 0 }: Props) => {
  const { openFile } = useWorkspaceContext();
  const [expanded, setExpanded] = useState(level < 1);
  const hasChildren = !!node.children?.length;

  function handleClick() {
    if (hasChildren) setExpanded((prev) => !prev);
    openFile(node);
  }

  return (
    <div className={clsx(styles.row, styles[`level-${level}`])}>
      <label className={clsx(styles.item)}>
        <span className={styles.name} onClick={handleClick}>
          <i
            className={clsx(
              "codicon",
              hasChildren ? "codicon-folder" : "codicon-file"
            )}
          />
          {node.name}
        </span>
      </label>
      {hasChildren && expanded && (
        <div className={styles.children}>
          {node.children?.map((child) => (
            <FileNode key={child.name} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileNode;
