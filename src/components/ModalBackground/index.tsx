import { IChildren } from "../../interfaces";
import { Container } from "./style";

const ModalBackground = ({ children }: IChildren) => {
  return <Container>{children}</Container>;
};

export { ModalBackground };
