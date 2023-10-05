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
  error,
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

      {!!error ? (
        <div>
          <svg
            aria-hidden="true"
            fill="rgb(217,48,37)"
            focusable="false"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
          </svg>

          <span>{error}</span>
        </div>
      ) : null}
    </Container>
  );
};

export { Input };
