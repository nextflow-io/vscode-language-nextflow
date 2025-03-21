import FileNode from "./FileNode";
import { FileNode as FileNodeType } from "../Provider/types";
import styles from "./styles.module.css";

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
