import clsx from "clsx";
import { useWorkspaceContext } from "../../Context";
import { TreeNode } from "../../Context/WorkspaceProvider/types";
import { ProcessIcon } from "../../icons";
import ItemActions from "./ItemActions";

import styles from "./styles.module.css";

type Props = {
  node: TreeNode;
};

const FileItem = ({ node }: Props) => {
  const { openFile, activeFile } = useWorkspaceContext();

  return (
    <div
      className={clsx(styles.item, {
        [styles.active]: activeFile === node.path
      })}
    >
      <label className={styles.label}>
        <span
          className={styles.name}
          onClick={() => openFile(node.path, node.line)}
        >
          <ProcessIcon className={styles.icon} />
          {node.name}
        </span>
      </label>
      <ItemActions node={node} />
    </div>
  );
};

export default FileItem;
