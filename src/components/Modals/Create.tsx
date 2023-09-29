import { TechnologyContext } from "../../contexts/technology.context";
import { IModal, ITechnologyProps } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { HeaderModal } from "../HeaderModal";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { Select } from "../Select";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const ModalCreateTechnology = ({ setModal }: IModal) => {
  const { handlePostTechnologies } = useContext(TechnologyContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    status: yup.string().required("Status obrigatório"),
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
          htmlFor="status"
          id="status"
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
