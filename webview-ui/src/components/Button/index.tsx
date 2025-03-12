type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
