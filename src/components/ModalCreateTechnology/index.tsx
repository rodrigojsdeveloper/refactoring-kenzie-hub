import { TechnologyContext } from "../../contexts/TechnologyContext";
import { IModalCreateTechnology } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { HeaderModal } from "../HeaderModal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";
import { Container } from "./style";
import { Select } from "../Select";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const ModalCreateTechnology = ({ setModal }: IModalCreateTechnology) => {
  const { handleAddToTechnology } = useContext(TechnologyContext);

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

  const onSubmitFunction = (data: any) => {
    setIsLoading(true);

    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setModal(false);

        handleAddToTechnology(res.data);

        toast.success("Tecnologia criada com sucesso!");
      })
      .catch((error) => {
        toast.error("Tecnologia já cadastrada!");

        console.error("error", error);
      })
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
        <Select
          label="Selecionar status"
          register={register}
          name="status"
          defaultValue=""
        >
          <option value="" disabled>
            Selecione a Tecnologia
          </option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </Select>

        <Button type="submit" size="xxlarge" color="pink" disabled={isLoading}>
          {isLoading ? "Cadastrando..." : "Cadastrar Tecnologia"}
        </Button>
      </form>
    </Container>
  );
};

export { ModalCreateTechnology };
