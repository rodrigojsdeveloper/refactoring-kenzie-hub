import { IModalCreateTechnology } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { HeaderModal } from "../HeaderModal";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Container } from "./style";
import { Select } from "../Select";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import * as yup from "yup";

const ModalCreateTechnology = ({ setModal }: IModalCreateTechnology) => {
  const token = localStorage.getItem("Kenzie Hub: token") ?? "";

  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    title: yup
      .string()
      .min(2, "Mínimo 2 caracteres")
      .required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    setIsLoading(true);

    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log)
      .catch((error) => console.error("error", error))
      .finally(() => setIsLoading(false));
  };

  return (
    <Container>
      <HeaderModal title="Cadastrar Tecnologia" setModal={setModal} />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Título"
          name="title"
          placeholder="Digite aqui a tecnologia"
          register={register}
          type="text"
        />
        <Select label="Selecionar status" name="status" register={register}>
          <option>Iniciante</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </Select>

        <Button type="submit" size="xxlarge" color="pink" disabled={isLoading}>
          {isLoading ? "Cadastrando..." : "Cadastrar Tecnologia"}
        </Button>
      </form>
    </Container>
  );
};

export { ModalCreateTechnology };
