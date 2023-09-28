import { IModalCreateTechnology, ITechnologyProps } from "../../interfaces";
import { TechnologyContext } from "../../contexts/TechnologyContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { HeaderModal } from "../HeaderModal";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { Select } from "../Select";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const ModalCreateTechnology = ({ setModal }: IModalCreateTechnology) => {
  const { handlePostTechnologies } = useContext(TechnologyContext);

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

  const onSubmitFunction = (data: Partial<ITechnologyProps>) =>
    handlePostTechnologies(setIsLoading, setModal, data);

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

        <Button type="submit" color="pink" disabled={isLoading}>
          {isLoading ? "Cadastrando..." : "Cadastrar Tecnologia"}
        </Button>
      </form>
    </Container>
  );
};

export { ModalCreateTechnology };
