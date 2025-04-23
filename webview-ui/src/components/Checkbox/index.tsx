import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children?: React.ReactNode;
  small?: boolean;
  className?: string;
  description?: string;
};

const Checkbox: React.FC<Props> = ({
  checked,
  onChange,
  children = null,
  small,
  className: classNameProp,
  description
}) => {
  const className = clsx(styles.checkbox, classNameProp, {
    [styles.small]: small,
    [styles.checked]: checked
  });

  const handleChange = (newValue: boolean) => {
    onChange(newValue);
  };

  return (
    <label
      className={className}
      onClick={() => handleChange(!checked)}
      title={description}
    >
      <span className={styles.box}>
        <i className="codicon codicon-check" />
      </span>
      {children}
    </label>
  );
};

export default Checkbox;
