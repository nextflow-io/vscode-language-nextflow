import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  small?: boolean;
  fullWidth?: boolean;
};

const Button: React.FC<Props> = ({
  onClick,
  href,
  children,
  small,
  fullWidth
}) => {
  if (href) {
    return (
      <a
        className={clsx(styles.button, {
          [styles.small]: small,
          [styles.fullWidth]: fullWidth
        })}
        href={href}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={clsx(styles.button, {
        [styles.small]: small,
        [styles.fullWidth]: fullWidth
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
