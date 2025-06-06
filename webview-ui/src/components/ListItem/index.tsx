import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  alt?: boolean;
  flex?: boolean;
  icon?: string;
};

const ListItem: React.FC<Props> = ({
  children,
  onClick,
  className,
  href,
  alt,
  flex,
  icon: iconName
}) => {
  const cName = clsx(styles.listItem, className, {
    [styles.alt]: alt,
    [styles.flex]: flex
  });

  const content = iconName
    ? (
      <span className="listItem-name">
        <i className={`codicon codicon-${iconName} mr-2`} />
        <label>{children}</label>
      </span>
    )
    : children;

  if (onClick) {
    return (
      <button className={cName} onClick={onClick}>
        {content}
      </button>
    );
  }
  if (href) {
    return (
      <a href={href} className={cName}>
        {content}
      </a>
    );
  }
  return <div className={cName}>{content}</div>;
};

export default ListItem;
