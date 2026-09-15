import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  disabled?: boolean;
  label?: string;
  className?: string;
  textarea?: boolean;
  lines?: number;
};

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  label = "",
  className = "",
  textarea = false,
  lines = 10
}) => {
  return (
    <div className={clsx(styles.inputContainer, className)}>
      {!!label && <label className={styles.label}>{label}</label>}
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={styles.input}
          rows={lines}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={styles.input}
        />
      )}
    </div>
  );
};

export default Input;
