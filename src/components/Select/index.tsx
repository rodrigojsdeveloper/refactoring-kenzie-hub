import { ISelectProps } from "../../interfaces";
import { Container } from "./style";

const Select = ({
  children,
  label,
  register,
  name,
  defaultValue,
  htmlFor,
  id,
}: ISelectProps) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>{label}</label>

      <select
        id={id}
        defaultValue={defaultValue}
        required={true}
        {...register(name)}
      >
        {children}
      </select>
    </Container>
  );
};

export { Select };
