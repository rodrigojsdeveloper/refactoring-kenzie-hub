import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingSpinner } from "../LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { IUserProps } from "../../interfaces";
import { FormLayout } from "./form.layout";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
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
    name: yup.string().required("Nome obrigatório."),
    email: yup.string().required("Email obrigatório.").email("Email inválido."),
    password: yup
      .string()
      .required("Senha obrigatória.")
      .min(8, "No mínimo 8 caracteres.")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve incluir letras maiúsculas, minúsculas, números e caracteres especiais."
      ),
    repeat_password: yup
      .string()
      .required("Senha obrigatória.")
      .min(8, "No mínimo 8 caracteres.")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve incluir letras maiúsculas, minúsculas, números e caracteres especiais."
      )
      .oneOf([yup.ref("password")], "As senhas devem coincidir."),
    bio: yup.string().required("Bio obrigatória."),
    contact: yup.string().required("Contato obrigatório."),
    course_module: yup.string().required("Módulo obrigatório."),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: Partial<IUserProps>) => {
    setIsLoading(true);

    Reflect.deleteProperty(data, "repeat_password");

    api
      .post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso!");

        reset();
        navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error("Email já existente!");
        } else {
          toast.error("Ops! Algo deu errado");
        }

        console.error("error", error);
      })
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
        error={errors.name?.message}
      />
      <Input
        label="Email"
        name="email"
        placeholder="Digite aqui seu email"
        register={register}
        type="email"
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        name="password"
        placeholder="Digite aqui sua senha"
        register={register}
        type="password"
        error={errors.password?.message}
      />
      <Input
        label="Confirmar Senha"
        name="repeat_password"
        placeholder="Digite novamente sua senha"
        register={register}
        type="password"
        error={errors.repeat_password?.message}
      />
      <Input
        label="Bio"
        name="bio"
        placeholder="Fale sobre você"
        register={register}
        type="text"
        error={errors.bio?.message}
      />
      <Input
        label="Contato"
        name="contact"
        placeholder="Opção de contato"
        register={register}
        type="text"
        error={errors.contact?.message}
      />
      <Select
        label="Selecionar módulo"
        name="course_module"
        register={register}
        defaultValue=""
        htmlFor="module"
        id="module"
        error={errors.course_module?.message}
      >
        <option value="" disabled>
          Selecione o módulo
        </option>
        <option value="Primeiro módulo">Primeiro módulo</option>
        <option value="Segundo módulo">Segundo módulo</option>
        <option value="Terceiro módulo">Terceiro módulo</option>
        <option value="Quarto módulo">Quarto módulo</option>
        <option value="Quinto módulo">Quinto módulo</option>
        <option value="Sexto módulo">Sexto módulo</option>
      </Select>

      <Button type="submit" color="pink" disabled={isLoading}>
        {isLoading ? <LoadingSpinner /> : "Cadastrar"}
      </Button>
    </FormLayout>
  );
};

export { FormSignUp };
