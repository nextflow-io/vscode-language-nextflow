import { useState } from "react";
import styles from "./styles.module.css";

const FileNodeChildren = ({
  label,
  items
}: {
  label: string;
  items: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!items.length) return null;
  return (
    <div className={styles.children}>
      <label onClick={() => setIsOpen(!isOpen)}>
        {label} ({items.length}) <span>{isOpen ? "▼" : "►"}</span>
      </label>
      {isOpen && (
        <div>
          {items.map((label) => (
            <div key={label}>{label}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileNodeChildren;
