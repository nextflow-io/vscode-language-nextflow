import clsx from "clsx";
import { useWorkspaceContext } from "../../Context";
import { TreeNode } from "../../Context/WorkspaceProvider/types";
import { ProcessIcon } from "../../icons";
import ItemActions from "../ItemActions";

import styles from "./styles.module.css";

type Props = {
  node: TreeNode;
};

const FileItem = ({ node }: Props) => {
  const { openFile, activeFile } = useWorkspaceContext();
  const isActive = activeFile === node.path;

  return (
    <div
      className={clsx(styles.item, { [styles.active]: isActive })}
      data-active={isActive || undefined}
    >
      <div className={styles.label}>
        <span
          className={styles.name}
          onClick={() => openFile(node.path, node.line)}
        >
          <ProcessIcon className={styles.icon} />
          <span className={styles.text}>{node.name}</span>
        </span>
      </div>
      <ItemActions node={node} />
    </div>
  );
};

export default FileItem;
