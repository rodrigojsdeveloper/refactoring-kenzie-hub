import { TechnologyContext } from "../../contexts/TechnologyContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FormLayout } from "./form.layout";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const FormSignIn = () => {
  const { setUser } = useContext(TechnologyContext);

  const navigate = useNavigate();

  const [load, setLoad] = useState<boolean>(false);

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
    setLoad(true);

    api
      .post("sessions", data)
      .then((res) => {
        setUser(res.data.user);

        sessionStorage.setItem("Kenzie Hub: token", res.data.token);

        sessionStorage.setItem("Kenzie Hub: id", res.data.user.id);

        return navigate("/dashboard");
      })
      .catch((error) => console.error("error", error))
      .finally(() => setLoad(false));
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
        <Button type="submit" color="pink" size="xxlarge" disabled={load}>
          {load ? "Entrando..." : "Entrar"}
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
