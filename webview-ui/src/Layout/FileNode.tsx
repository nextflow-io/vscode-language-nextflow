import { useProvider } from "../Provider";
import FileNodeChildren from "./FileNodeChildren";
import styles from "./styles.module.css";

import { FileNode as FileNodeType } from "../Provider/types";

type Props = {
  node: FileNodeType;
};

const FileNode = ({ node }: Props) => {
  const { openFile, getTest } = useProvider();

  const handleFileClick = (file: FileNodeType, isTest?: boolean) => {
    console.log("🟢 handleFileClick", file);
    openFile(file.name, isTest);
  };

  const testFile = getTest(node.name);

  return (
    <div className={styles.item}>
      <label>
        <span onClick={() => handleFileClick(node)}>{node.name}</span>
        {!!testFile ? (
          <span onClick={() => handleFileClick(testFile, true)}>✅ Tested</span>
        ) : (
          <span className={styles.disabled}>Not tested</span>
        )}
      </label>
      <div className={styles.children}>
        <FileNodeChildren
          parent={node.name}
          label="Imports"
          items={node.imports}
        />
      </div>
    </div>
  );
};

export default FileNode;
