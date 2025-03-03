import { useState } from "react";
import styles from "./styles.module.css";
import { useProvider } from "../Provider";

const FileNodeChildren = ({
  label,
  items
}: {
  label: string;
  items: string[];
}) => {
  const { getFile, openFile } = useProvider();
  const [isOpen, setIsOpen] = useState(false);

  if (!items.length) return null;

  const linkableFiles = items.map((label) => getFile(label)).filter(Boolean);

  return (
    <div className={styles.children}>
      <label onClick={() => setIsOpen(!isOpen)}>
        {label} ({linkableFiles.length}) <span>{isOpen ? "▼" : "►"}</span>
      </label>
      {isOpen && (
        <div>
          {linkableFiles.map((file) => {
            if (!file) return null;
            return (
              <label key={label} onClick={() => openFile(file.name)}>
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
