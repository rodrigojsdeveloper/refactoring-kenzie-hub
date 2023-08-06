import { IButtonProps } from "../../interfaces";
import { Container } from "./style";

const Button = ({
  children,
  onClick,
  disabled,
  type,
  size,
  color,
}: IButtonProps) => {
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
