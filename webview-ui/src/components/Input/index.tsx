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
};

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  label = "",
  className = ""
}) => {
  return (
    <div className={clsx(styles.inputContainer, className)}>
      {!!label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
