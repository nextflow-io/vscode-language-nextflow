import FileNode from "./FileNode";

import styles from "./styles.module.css";

import { FileNode as FileNodeType } from "../../Context/WorkspaceProvider/types";

type Props = {
  files: FileNodeType[];
};

const FileTree = ({ files }: Props) => {
  return (
    <div className={styles.section}>
      {files.map((node) => (
        <FileNode key={node.filePath} node={node} />
      ))}
    </div>
  );
};

export default FileTree;
