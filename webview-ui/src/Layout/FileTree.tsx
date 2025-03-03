import { useProvider } from "../Provider";
import FileNode from "./FileNode";

import styles from "./styles.module.css";

type Props = {
  name: string;
  type: "workflow" | "process";
};

const FileTree = ({ name, type }: Props) => {
  const { files } = useProvider();
  const filteredFiles = files.filter((f) => f.type === type);

  return (
    <div className={styles.section}>
      <h2>{name}</h2>
      {filteredFiles.map((node) => (
        <FileNode key={node.filePath} node={node} />
      ))}
    </div>
  );
};

export default FileTree;
