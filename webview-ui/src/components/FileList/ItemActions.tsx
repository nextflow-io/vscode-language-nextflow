import clsx from "clsx";
import { TestCreation, TreeNode } from "../../Context/WorkspaceProvider/types";
import { useWorkspaceContext } from "../../Context/WorkspaceProvider";

import styles from "./styles.module.css";

type Props = {
  node: TreeNode;
};

const ItemActions: React.FC<Props> = ({ node }) => {
  const { openFile, testCreation, createTest } = useWorkspaceContext();
  if (node.name === "<entry>") return null;

  if (!!node.test) {
    return (
      <span
        className={styles.actions}
        onClick={() => !!node.test && openFile(node.test.path, node.test.line)}
      >
        <i
          className={clsx("codicon", "codicon-go-to-file", styles.actionIcon)}
        />
        nf-test
      </span>
    );
  }

  const { label, style } = getTestLabel(node, testCreation);

  return (
    <span
      className={clsx(styles.actions, style)}
      onClick={() => createTest(node.path)}
    >
      {label}
    </span>
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
