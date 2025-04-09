import React from "react";
import styles from "./styles.module.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  disabled?: boolean;
};

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false
}) => {
  return (
    <div className={styles.inputContainer}>
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
