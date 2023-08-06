import { ISelectProps } from "../../interfaces";
import { Container } from "./style";

const Select = ({ children, label, register, name }: ISelectProps) => {
  return (
    <Container>
      <label>{label}</label>

      <select {...register(name)}>{children}</select>
    </Container>
  );
};

export { Select };
