import FileNode from "./FileNode";

import styles from "./styles.module.css";

import { FileNode as FileNodeType } from "../../Context/WorkspaceProvider/types";

type Props = {
  tree?: FileNodeType;
  searchTerm?: string;
};

const FileTree = ({ tree, searchTerm }: Props) => {
  if (!tree?.name)
    return (
      <section className="cozy">
        <p>No file tree found</p>
      </section>
    );
  return (
    <div className={styles.container}>
      <FileNode node={tree} searchTerm={searchTerm} />
    </div>
  );
};

export default FileTree;
