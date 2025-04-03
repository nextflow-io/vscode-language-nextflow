import FileNode from "./FileNode";

import styles from "./styles.module.css";

import { FileNode as FileNodeType } from "../../Context/WorkspaceProvider/types";

type Props = {
  tree?: FileNodeType;
};

const FileTree = ({ tree }: Props) => {
  if (!tree) return null;
  return (
    <div className={styles.container}>
      <FileNode node={tree} />
    </div>
  );
};

export default FileTree;
