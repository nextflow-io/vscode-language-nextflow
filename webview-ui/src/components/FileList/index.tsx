import FileNode from "./FileNode";

import styles from "./styles.module.css";

import { FileNode as FileNodeType } from "../../Context/WorkspaceProvider/types";

type Props = {
  files: FileNodeType[];
};

const FileList = ({ files }: Props) => {
  if (!files) return null;
  return (
    <div className={styles.section}>
      {files?.map((node) => <FileNode key={node.filePath} node={node} />)}
    </div>
  );
};

export default FileList;
