import { useWorkspaceContext } from "../Context";
import FileNodeChildren from "./FileNodeChildren";
import styles from "./styles.module.css";
import nextflowIcon from "../images/nextflow-icon.svg";
import fileIcon from "../images/go-to-file.svg";

import { FileNode as FileNodeType } from "../Context/WorkspaceProvider/types";
import clsx from "clsx";

type Props = {
  node: FileNodeType;
};

const FileNode = ({ node }: Props) => {
  const { openFile, getTest, viewType: type } = useWorkspaceContext();
  const testFile = getTest(node.name);

  let typeStyleName = "workflow";
  if (type === "processes") {
    typeStyleName = "process";
  }

  return (
    <div className={clsx(styles.row, { [styles[typeStyleName]]: !!type })}>
      <label className={clsx(styles.item)}>
        <span className={styles.name} onClick={() => openFile(node)}>
          <img className={styles.icon} src={nextflowIcon} />
          {node.name}
        </span>
        {type === "processes" && (
          <>
            {!!testFile ? (
              <span
                className={styles.metaLabel}
                onClick={() => openFile(testFile)}
              >
                <img className={styles.metaIcon} src={fileIcon} />
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
          label="Includes"
          parent={node.name}
          items={node.imports}
        />
      )}
    </div>
  );
};

export default FileNode;
