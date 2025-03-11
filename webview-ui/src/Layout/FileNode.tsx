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

  return (
    <div className={clsx(styles.item, { [styles[`${type}`]]: !!type })}>
      <label>
        <span onClick={() => openFile(node)}>{node.name}</span>
        {type === "processes" && (
          <>
            {!!testFile ? (
              <span
                className={styles.metaLabel}
                onClick={() => openFile(testFile)}
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
