import { useProvider } from "../Provider";
import FileNode from "./FileNode";

import styles from "./styles.module.css";

type Props = {
  type: "workflow" | "process";
};

const FileTree = ({ type }: Props) => {
  const { files } = useProvider();
  const filteredFiles = files.filter((f) => f.type === type);

  return (
    <div className={styles.section}>
      {filteredFiles.map((node) => (
        <FileNode key={node.filePath} node={node} />
      ))}
    </div>
  );
};

export default FileTree;
