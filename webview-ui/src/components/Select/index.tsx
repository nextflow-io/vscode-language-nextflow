import styles from "./styles.module.css";

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

const Select: React.FC<Props> = ({ options, value, onChange }) => {
  return (
    <div className={styles.select}>
      {options.map((option) => (
        <div
          key={option.value}
          className={`${styles.option} ${option.value === value ? styles.selected : ""}`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default Select;
