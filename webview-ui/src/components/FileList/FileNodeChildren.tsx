import clsx from "clsx";
import { useWorkspaceContext } from "../../Context";

import { FileNode as FileNodeType } from "../../Context/WorkspaceProvider/types";

import styles from "./styles.module.css";

const FileNodeChildren = ({
  fileNode,
  label
}: {
  fileNode: FileNodeType;
  label: string;
}) => {
  const { getFile, openFile, isSelected, isSelectedFile, selectItem } =
    useWorkspaceContext();

  const linkableFiles = fileNode?.imports
    ?.map((label) => getFile(label))
    .filter(Boolean);
  const itemKey = `${fileNode?.name}.${label}`;
  const isOpen = isSelected(itemKey);

  if (!linkableFiles) return null;

  return (
    <div className={styles.children}>
      <label onClick={() => selectItem(itemKey)}>
        {label} ({linkableFiles.length}) <span>{isOpen ? "▼" : "►"}</span>
      </label>
      {isOpen && (
        <div>
          {linkableFiles?.map((file) => {
            if (!file) return null;
            return (
              <label
                className={clsx(styles.child, {
                  [styles.selected]: isSelectedFile(file)
                })}
                key={label}
                onClick={() => openFile(file)}
              >
                {file.name}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FileNodeChildren;
