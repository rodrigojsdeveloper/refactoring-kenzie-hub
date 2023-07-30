import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { FormLayout } from "./form.layout";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const FormSignIn = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    console.log(data);
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmitFunction)}>
      <h1>Login</h1>

      <Input
        label="Nome"
        name="name"
        placeholder="Digite aqui seu nome"
        register={register}
        type="text"
      />
      <Input
        label="Email"
        name="email"
        placeholder="Digite aqui seu email"
        register={register}
        type="email"
      />

      <div className="divButtons">
        <Button type="submit" color="pink" size="xxlarge">
          Entrar
        </Button>

        <p>Ainda não possui uma conta?</p>

        <Button color="gray" size="xxlarge" onClick={() => navigate("/")}>
          Cadastre-se
        </Button>
      </div>
    </FormLayout>
  );
};

export { FormSignIn };
