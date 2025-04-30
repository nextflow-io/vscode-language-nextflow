import clsx from "clsx";

import { useWorkspaceContext } from "../../Context";
import FileNodeChildren from "./FileNodeChildren";

import styles from "./styles.module.css";

import { FileNode as FileNodeType } from "../../Context/WorkspaceProvider/types";

type Props = {
  node: FileNodeType;
};

const FileNode = ({ node }: Props) => {
  const { openFile, getTest, viewID: type } = useWorkspaceContext();
  const testFile = getTest(node.name);

  let typeStyleName = "workflow";
  if (type === "processes") {
    typeStyleName = "process";
  }

  return (
    <div className={clsx(styles.row, { [styles[typeStyleName]]: !!type })}>
      <label className={clsx(styles.item)}>
        <span className={styles.name} onClick={() => openFile(node)}>
          <i className="codicon codicon-symbol-method" />
          {node.name}
        </span>
        {type === "processes" && (
          <>
            {!!testFile ? (
              <span
                className={styles.metaLabel}
                onClick={() => openFile(testFile)}
              >
                <i
                  className={clsx(
                    "codicon",
                    "codicon-go-to-file",
                    styles.metaIconHover
                  )}
                />
                nf-test
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
          label="Includes"
          parent={node.name}
          items={node.imports}
        />
      )}
    </div>
  );
};

export default FileNode;
