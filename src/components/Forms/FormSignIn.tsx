import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { FormLayout } from "./form.layout";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";
import { Button } from "../Button";
import { useState } from "react";
import { Input } from "../Input";
import * as yup from "yup";

const FormSignIn = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setIsLoading(true);

    api
      .post("sessions", data)
      .then((res) => {
        localStorage.setItem("Kenzie Hub: token", res.data.token);

        localStorage.setItem("Kenzie Hub: id", res.data.user.id);

        toast.success("Você fez login com sucesso!");

        return navigate("/dashboard");
      })
      .catch((error) => {
        toast.error("Erro ao entrar na conta, verifique seu email ou senha!");

        console.error("error", error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmitFunction)}>
      <h1>Login</h1>

      <Input
        label="Email"
        name="email"
        placeholder="Digite aqui seu email"
        register={register}
        type="email"
      />
      <Input
        label="Senha"
        name="password"
        placeholder="Digite aqui sua senha"
        register={register}
        type="password"
      />

      <div className="divButtons">
        <Button type="submit" color="pink" size="xxlarge" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Entrar"}
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
