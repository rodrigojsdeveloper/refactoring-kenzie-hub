import { ISelectProps } from "../../interfaces";
import { Container } from "./style";

const Select = ({
  children,
  label,
  register,
  name,
  defaultValue,
}: ISelectProps) => {
  return (
    <Container>
      <label>{label}</label>

      <select {...register(name)} defaultValue={defaultValue}>
        {children}
      </select>
    </Container>
  );
};

export { Select };
