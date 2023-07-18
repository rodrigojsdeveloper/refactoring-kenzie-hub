import { Container } from "./style";

interface IButton {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size: "xxlarge" | "xlarge" | "large" | "medium" | "small" | "xsmall";
  color: "pink" | "gray" | "dark-grey";
}

const Button = ({
  children,
  onClick,
  disabled,
  type,
  size,
  color,
}: IButton) => {
  return (
    <Container
      onClick={onClick}
      disabled={disabled}
      type={type}
      size={size}
      color={color}
    >
      {children}
    </Container>
  );
};

export { Button };
