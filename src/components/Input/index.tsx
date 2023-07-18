import { FieldValues, UseFormRegister } from "react-hook-form";
import { Container } from "./style";

interface InputProps {
  label: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  register: any;
  disabled?: boolean;
  defaultValue?: string | number | readonly string[];
}

const Input = ({
  label,
  placeholder,
  type,
  name,
  register,
  defaultValue,
  disabled,
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
      />
    </Container>
  );
};

export { Input };
