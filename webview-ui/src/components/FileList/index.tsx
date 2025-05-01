import { TreeNode } from "../../Context/WorkspaceProvider/types";
import FileItem from "./FileItem";
import styles from "./styles.module.css";

type Props = {
  nodes: TreeNode[];
};

const FileList = ({ nodes }: Props) => {
  return (
    <div className={styles.section}>
      {nodes.map((node) => <FileItem key={`${node.path}:${node.name}`} node={node} />)}
    </div>
  );
};

export default FileList;
