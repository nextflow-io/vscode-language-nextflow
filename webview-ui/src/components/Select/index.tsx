import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { SeqeraIcon } from "../../icons";

type Option = {
  value: string | number;
  label: string | number;
};

type Props = {
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  alt?: boolean;
  subtle?: boolean;
  subtle2?: boolean;
  icon?: string;
  large?: boolean;
  label?: string;
};

const Select: React.FC<Props> = ({
  options,
  value,
  onChange,
  alt,
  subtle,
  subtle2,
  icon,
  large,
  label
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
    [styles.subtle]: subtle,
    [styles.subtle2]: subtle2,
    [styles.large]: large
  });

  let iconElement = <></>;
  if (icon) {
    iconElement = <i className={`codicon ${icon}`} />;
  }
  if (icon === "seqera") {
    iconElement = (
      <SeqeraIcon style={{ height: 13, width: 13 }} className="mr-2" />
    );
  }

  return (
    <>
      {label && <div className={styles.outerLabel}>{label}</div>}
      <div className={styles.select} ref={selectRef}>
        <div
          className={buttonClassName}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className={styles.label}>
            {iconElement}
            {selectedOption?.label || label || "Select an option"}
          </span>
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
    </>
  );
};

export default Select;
