import { useWorkspaceContext } from "../../Context";
import { TreeNode } from "../../Context/WorkspaceProvider/types";
import processIcon from "../../images/process.svg";
import ItemActions from "./ItemActions";

import styles from "./styles.module.css";

type Props = {
  node: TreeNode;
};

const FileItem = ({ node }: Props) => {
  const { openFile } = useWorkspaceContext();

  return (
    <div className={styles.item}>
      <label className={styles.label}>
        <span
          className={styles.name}
          onClick={() => openFile(node.path, node.line)}
        >
          <img className={styles.icon} src={processIcon} />
          {node.name}
        </span>
      </label>
      <ItemActions node={node} />
    </div>
  );
};

export default FileItem;
