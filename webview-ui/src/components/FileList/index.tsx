import { TreeNode } from "../../Context/WorkspaceProvider/types";
import FileNode from "./FileNode";
import styles from "./styles.module.css";

type Props = {
  nodes: TreeNode[];
};

const FileList = ({ nodes }: Props) => {
  return (
    <div className={styles.section}>
      {nodes.map((node) => <FileNode key={`${node.uri}:${node.name}`} node={node} />)}
    </div>
  );
};

export default FileList;
