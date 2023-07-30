import { Container } from "./style";

interface IFormLayoutProps {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const FormLayout = ({ children, onSubmit }: IFormLayoutProps) => {
  return <Container onSubmit={onSubmit}>{children}</Container>;
};

export { FormLayout };
