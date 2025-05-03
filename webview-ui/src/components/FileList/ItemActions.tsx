import clsx from "clsx";
import { TestCreation, TreeNode } from "../../Context/WorkspaceProvider/types";
import { useWorkspaceContext } from "../../Context/WorkspaceProvider";

import styles from "./styles.module.css";

type Props = {
  node: TreeNode;
};

const ItemActions: React.FC<Props> = ({ node }) => {
  const { openFile, testCreation, createTest, getContainer } =
    useWorkspaceContext();
  if (node.name === "<entry>") return null;
  const hasTest = !!node.test;
  const { label, style } = getTestLabel(node, testCreation);

  let inProgress = true;
  if (
    typeof testCreation?.finished === "undefined" ||
    testCreation.finished === true
  ) {
    inProgress = false;
  }

  return (
    <div className={styles.actions}>
      <span className={styles.action} onClick={() => getContainer(node.path)}>
        Wave
      </span>
      {hasTest ? (
        <span
          className={styles.action}
          onClick={() =>
            !!node.test && openFile(node.test.path, node.test.line)
          }
        >
          <i
            className={clsx("codicon", "codicon-go-to-file", styles.actionIcon)}
          />
          nf-test
        </span>
      ) : (
        <span
          className={clsx(styles.action, style, {
            [styles.inProgress]: inProgress
          })}
          onClick={() => createTest(node.path)}
        >
          {label}
        </span>
      )}
    </div>
  );
};

function getTestLabel(node: TreeNode, test: TestCreation) {
  let label = "Generate";
  let style = "";
  if (test.filePath === node.path) {
    if (test.finished) {
      if (test.successful) {
        label = "nf-test generated";
        style = styles.success;
      } else {
        label = "Generation failed";
        style = styles.error;
      }
    } else {
      label = "Generating...";
      style = styles.generating;
    }
  }
  return { label, style };
}

export default ItemActions;
