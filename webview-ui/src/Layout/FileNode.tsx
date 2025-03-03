import styles from "./styles.module.css";

import { FileNode as FileNodeType } from "./types";

const FileNode = ({
  node,
  openFile
}: {
  node: FileNodeType;
  openFile: (filePath: string) => void;
}) => {
  const handleFileClick = () => {
    openFile(node.filePath);
  };

  return (
    <div className={styles.item}>
      <div className={styles.label} onClick={handleFileClick}>
        {node.name}
      </div>
      {!!node.imports && (
        <div className={styles.imports}>
          {node.imports.map((importName) => (
            <div key={importName}>{importName}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileNode;
