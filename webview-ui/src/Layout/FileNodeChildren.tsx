import styles from "./styles.module.css";
import { useWorkspaceContext } from "../Context";

const FileNodeChildren = ({
  parent,
  label,
  items = []
}: {
  parent: string;
  label: string;
  items: string[];
}) => {
  const { getFile, openFile, isSelected, selectItem } = useWorkspaceContext();

  const linkableFiles = items.map((label) => getFile(label)).filter(Boolean);
  const itemKey = `${parent}.${label}`;
  const isOpen = isSelected(itemKey);

  return (
    <div className={styles.children}>
      <label onClick={() => selectItem(itemKey)}>
        {label} ({linkableFiles.length}) <span>{isOpen ? "▼" : "►"}</span>
      </label>
      {isOpen && (
        <div>
          {linkableFiles.map((file) => {
            if (!file) return null;
            return (
              <label key={label} onClick={() => openFile(file)}>
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
