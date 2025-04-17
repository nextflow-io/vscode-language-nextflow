import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type Option = {
  value: string | number;
  label: string | number;
};

type Props = {
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  alt?: boolean;
  alt2?: boolean;
  subtle?: boolean;
};

const Select: React.FC<Props> = ({
  options,
  value,
  onChange,
  alt,
  alt2,
  subtle
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const buttonClassName = clsx(styles.selectButton, {
    [styles.alt]: alt,
    [styles.alt2]: alt2,
    [styles.subtle]: subtle
  });

  return (
    <div className={styles.select} ref={selectRef}>
      <div
        className={buttonClassName}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {selectedOption?.label || "Select an option"}
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${option.value === value ? styles.selected : ""}`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
