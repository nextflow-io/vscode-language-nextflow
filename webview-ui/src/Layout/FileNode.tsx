import { useProvider } from "../Provider";
import FileNodeChildren from "./FileNodeChildren";
import styles from "./styles.module.css";

import { FileNode as FileNodeType } from "../Provider/types";

type Props = {
  node: FileNodeType;
};

const FileNode = ({ node }: Props) => {
  const { openFile } = useProvider();
  const handleFileClick = () => {
    openFile(node.filePath);
  };

  return (
    <div className={styles.item}>
      <div className={styles.label} onClick={handleFileClick}>
        {node.name}
      </div>
      <FileNodeChildren label="Imports" items={node.imports} />
    </div>
  );
};

export default FileNode;
