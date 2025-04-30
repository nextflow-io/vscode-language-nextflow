import { TreeNode } from "../../Context/WorkspaceProvider/types";
import FileNode from "./FileNode";
import styles from "./styles.module.css";

type Props = {
  nodes: TreeNode[];
  searchTerm?: string;
};

const FileTree = ({ nodes, searchTerm }: Props) => {
  if (nodes.length == 0) {
    return <section className="cozy">No entry workflows found</section>;
  }

  return (
    <div className={styles.container}>
      {nodes.map((node) => (
        <FileNode node={node} searchTerm={searchTerm} />
      ))}
    </div>
  );
};

export default FileTree;
