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
  error,
}: ISelectProps) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>{label}</label>

      <select id={id} defaultValue={defaultValue} {...register(name)}>
        {children}
      </select>

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

export { Select };
