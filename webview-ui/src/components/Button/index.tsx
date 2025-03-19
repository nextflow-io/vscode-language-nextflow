import styles from "./styles.module.css";

type Props = {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ onClick, href, children }) => {
  if (href) {
    return (
      <a className={styles.button} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
