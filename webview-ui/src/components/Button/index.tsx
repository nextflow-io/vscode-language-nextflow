import clsx from "clsx";
import styles from "./styles.module.css";
import { shouldAdjustIconSize } from "./utils";

type Props = {
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
  alt?: boolean;
  small?: boolean;
  fullWidth?: boolean;
  icon?: string;
  className?: string;
  iconClassName?: string;
  description?: string;
};

const Button: React.FC<Props> = ({
  onClick,
  href,
  children = null,
  small,
  fullWidth,
  icon,
  className: classNameProp,
  iconClassName,
  description,
  alt
}) => {
  const className = clsx(styles.button, classNameProp, {
    [styles.small]: small,
    [styles.fullWidth]: fullWidth,
    [styles.icon]: !!icon,
    [styles.alt]: alt
  });

  let content = children;

  if (icon) {
    content = (
      <>
        <i
          className={clsx("codicon", iconClassName, icon, {
            [styles.iconfix]: shouldAdjustIconSize(icon),
            "mr-2": !!children
          })}
        />
        {children}
      </>
    );
  }

  if (href) {
    return (
      <a className={className} href={href} title={description}>
        {content}
      </a>
    );
  }
  return (
    <button className={className} onClick={onClick} title={description}>
      {content}
    </button>
  );
};

export default Button;
