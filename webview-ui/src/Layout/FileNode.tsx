import { useProvider } from "../Provider";
import FileNodeChildren from "./FileNodeChildren";
import styles from "./styles.module.css";

import { FileNode as FileNodeType } from "../Provider/types";
import clsx from "clsx";

type Props = {
  node: FileNodeType;
};

const FileNode = ({ node }: Props) => {
  const { openFile, getTest, viewType: type } = useProvider();
  const testFile = getTest(node.name);

  const handleFileClick = (file: FileNodeType, isTest?: boolean) => {
    console.log("🟢 handleFileClick", file);
    openFile(file.name, isTest);
  };

  return (
    <div className={clsx(styles.item, { [styles[`${type}`]]: !!type })}>
      <label>
        <span onClick={() => handleFileClick(node)}>{node.name}</span>
        {type === "processes" && (
          <>
            {!!testFile ? (
              <span
                className={styles.metaLabel}
                onClick={() => handleFileClick(testFile, true)}
              >
                Tested
              </span>
            ) : (
              <span className={styles.metaLabel + " " + styles.disabled}>
                Untested
              </span>
            )}
          </>
        )}
      </label>
      {type === "workflows" && (
        <FileNodeChildren
          label="Imports"
          parent={node.name}
          items={node.imports}
        />
      )}
    </div>
  );
};

export default FileNode;
