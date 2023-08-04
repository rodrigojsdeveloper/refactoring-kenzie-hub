import { Container } from "./style";

interface ISelectProps {
  label: string;
  name: string;
  register: any;
  defaultValue?: string | number | readonly string[];
  children: React.ReactNode;
}

const Select = ({ children, label, register, name }: ISelectProps) => {
  return (
    <Container>
      <label>{label}</label>

      <select {...register(name)}>{children}</select>
    </Container>
  );
};

export { Select };
