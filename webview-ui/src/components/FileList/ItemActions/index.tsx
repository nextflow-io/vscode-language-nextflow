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
      <button
        className={styles.action}
        onClick={() => getContainer(node.path)}
        title="Generate Wave Container"
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
          <i className={clsx("codicon", "codicon-beaker", styles.actionIcon)} />
          nf-test
        </button>
      ) : (
        <button
          className={clsx(styles.action, style, {
            [styles.inProgress]: inProgress
          })}
          onClick={() => createTest(node.path)}
          title="Generate nf-test"
        >
          <i
            className={clsx(
              "codicon",
              "codicon-beaker-stop",
              styles.actionIcon
            )}
          />
          {label}
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
