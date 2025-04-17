import clsx from "clsx";
import styles from "./styles.module.css";
import { shouldAdjustIconSize } from "./utils";

type Props = {
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
  alt?: boolean;
  alt2?: boolean;
  subtle?: boolean;
  small?: boolean;
  bare?: boolean;
  active?: boolean;
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
  bare,
  active,
  fullWidth,
  icon,
  className: classNameProp,
  iconClassName = "",
  description,
  alt,
  alt2,
  subtle
}) => {
  const className = clsx(styles.button, classNameProp, {
    [styles.small]: small,
    [styles.fullWidth]: fullWidth,
    [styles.icon]: !!icon,
    [styles.alt]: alt,
    [styles.subtle]: subtle,
    [styles.alt2]: alt2,
    [styles.bare]: bare,
    [styles.active]: active
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
