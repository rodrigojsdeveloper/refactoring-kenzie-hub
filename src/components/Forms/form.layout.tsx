import { IFormLayoutProps } from "../../interfaces";
import { PropsWithChildren } from "react";
import { Container } from "./style";

const FormLayout = ({
  children,
  onSubmit,
}: PropsWithChildren<IFormLayoutProps>) => {
  return <Container onSubmit={onSubmit}>{children}</Container>;
};

export { FormLayout };
