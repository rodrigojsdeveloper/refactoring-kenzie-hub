import { IFormLayoutProps } from "../../interfaces";
import { Container } from "./style";

const FormLayout = ({ children, onSubmit }: IFormLayoutProps) => {
  return <Container onSubmit={onSubmit}>{children}</Container>;
};

export { FormLayout };
