import { PropsWithChildren } from "react";
import { Container } from "./style";

const ModalBackground = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export { ModalBackground };
