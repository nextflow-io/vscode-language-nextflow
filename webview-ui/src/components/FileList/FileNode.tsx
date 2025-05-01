import clsx from "clsx";

import { useWorkspaceContext } from "../../Context";
import { TreeNode } from "../../Context/WorkspaceProvider/types";
import styles from "./styles.module.css";

type Props = {
  node: TreeNode;
};

const FileNode = ({ node }: Props) => {
  const { openFile } = useWorkspaceContext();

  return (
    <div className={clsx(styles.row)}>
      <label className={clsx(styles.item)}>
        <span className={styles.name} onClick={() => openFile(node.uri, node.line)}>
          <i className="codicon codicon-symbol-method" />
          {node.name}
        </span>
        {node.name !== "<entry>" && (
          !!node.test ? (
            <span
              className={styles.metaLabel}
              onClick={() => !!node.test && openFile(node.test.uri, node.test.line)}
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
          )
        )}
      </label>
    </div>
  );
};

export default FileNode;
