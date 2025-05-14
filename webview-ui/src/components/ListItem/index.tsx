import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  alt?: boolean;
  flex?: boolean;
};

const ListItem: React.FC<Props> = ({
  children,
  onClick,
  className,
  href,
  alt,
  flex
}) => {
  if (onClick) {
    return (
      <button
        className={clsx(styles.listItem, className, {
          [styles.alt]: alt,
          [styles.flex]: flex
        })}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  if (href) {
    return (
      <a href={href} className={clsx(styles.listItem, className)}>
        {children}
      </a>
    );
  }
  return <div className={clsx(styles.listItem, className)}>{children}</div>;
};

export default ListItem;
