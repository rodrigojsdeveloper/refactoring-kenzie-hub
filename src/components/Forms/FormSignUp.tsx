import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { FormLayout } from "./form.layout";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Select } from "../Select";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import * as yup from "yup";

const FormSignUp = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo 8 caracteres")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais"
      ),
    repeat_password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo 8 caracteres")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais"
      )
      .oneOf([yup.ref("password")], "Passwords must match"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: object) => {
    setIsLoading(true);

    Reflect.deleteProperty(data, "repeat_password");

    api
      .post("/users", data)
      .then(() => navigate("/signin"))
      .catch((error) => console.error("error", error))
      .finally(() => setIsLoading(false));
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmitFunction)}>
      <h1>Crie sua conta</h1>

      <h2>Rapido e grátis, vamos nessa</h2>

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
      <Input
        label="Senha"
        name="password"
        placeholder="Digite aqui sua senha"
        register={register}
        type="password"
      />
      <Input
        label="Confirmar Senha"
        name="repeat_password"
        placeholder="Digite novamente sua senha"
        register={register}
        type="password"
      />
      <Input
        label="Bio"
        name="bio"
        placeholder="Fale sobre você"
        register={register}
        type="text"
      />
      <Input
        label="Contato"
        name="contact"
        placeholder="Opção de contato"
        register={register}
        type="text"
      />
      <Select
        label="Selecionar módulo"
        name="course_module"
        register={register}
      >
        <option>Primeiro módulo</option>
        <option>Segundo módulo</option>
        <option>Terceiro módulo</option>
        <option>Quarto módulo</option>
      </Select>

      <Button type="submit" color="pink" size="xxlarge" disabled={isLoading}>
        {isLoading ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </FormLayout>
  );
};

export { FormSignUp };
