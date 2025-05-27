import clsx from "clsx";
import {
  TestCreation,
  TreeNode
} from "../../../Context/WorkspaceProvider/types";
import { useWorkspaceContext } from "../../../Context/WorkspaceProvider";
import WaveIcon from "./WaveIcon";

import styles from "./styles.module.css";

type Props = {
  node: TreeNode;
};

const ItemActions: React.FC<Props> = ({ node }) => {
  const { openFile, testCreation, createTest, getContainer } =
    useWorkspaceContext();
  if (node.name === "<entry>") return null;
  const hasTest = !!node.test;
  const { style } = getTestLabel(node, testCreation);

  let inProgress = true;
  let currentItemInProgress = false;
  if (
    typeof testCreation?.finished === "undefined" ||
    testCreation.finished === true
  ) {
    inProgress = false;
  }

  if (inProgress && testCreation.filePath === node.path) {
    currentItemInProgress = true;
  }

  return (
    <div className={styles.actions}>
      <button
        className={styles.action}
        onClick={() => getContainer(node.path)}
        title="Generate Wave Container"
        disabled={inProgress}
      >
        <WaveIcon className={styles.wave} />
      </button>
      {hasTest ? (
        <button
          className={styles.action}
          title="Open nf-test"
          onClick={() =>
            !!node.test && openFile(node.test.path, node.test.line)
          }
        >
          <i className={clsx("codicon", "codicon-beaker", styles.actionIcon, styles.actionGo)} />
        </button>
      ) : (
        <button
          className={clsx(styles.action, style, {
            [styles.inProgress]: currentItemInProgress
          })}
          onClick={() => createTest(node.path)}
          title="Generate nf-test"
          disabled={inProgress}
        >
          <i
            className={clsx(
              "codicon",
              "codicon-beaker-stop",
              styles.actionIcon
            )}
          />
          {currentItemInProgress && (
            <i
              className={clsx(
                "codicon",
                "codicon-loading",
                styles.actionIcon,
                styles.spin
              )}
            />
          )}
        </button>
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
