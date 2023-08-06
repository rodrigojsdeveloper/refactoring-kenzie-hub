import { InputProps } from "../../interfaces";
import { Container } from "./style";

const Input = ({
  label,
  placeholder,
  type,
  name,
  register,
  defaultValue,
  disabled,
  value,
}: InputProps) => {
  return (
    <Container>
      <label>{label}</label>

      <input
        type={type}
        autoComplete="off"
        disabled={disabled}
        {...register(name)}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
      />
    </Container>
  );
};

export { Input };
