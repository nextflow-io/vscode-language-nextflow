import FileNode from "./FileNode";

import styles from "./styles.module.css";

import { FileNode as FileNodeType } from "../../Context/WorkspaceProvider/types";

type Props = {
  tree?: FileNodeType;
  searchTerm?: string;
};

const FileTree = ({ tree, searchTerm }: Props) => {
  if (!tree) return null;
  return (
    <div className={styles.container}>
      <FileNode node={tree} searchTerm={searchTerm} />
    </div>
  );
};

export default FileTree;
