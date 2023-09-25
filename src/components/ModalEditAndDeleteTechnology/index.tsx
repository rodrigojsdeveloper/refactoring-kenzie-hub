import { TechnologyContext } from "../../contexts/TechnologyContext";
import { IModalEditAndDeleteTechnology } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { HeaderModal } from "../HeaderModal";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { Select } from "../Select";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const ModalEditAndDeleteTechnology = ({
  setModal,
  currentTechnology,
}: IModalEditAndDeleteTechnology) => {
  const { handleEditTecnology, handleDeleteTechnology } =
    useContext(TechnologyContext);

  const [isLoadingEdit, setIsLoadingEdit] = useState(false);

  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const schema = yup.object().shape({
    status: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) =>
    handleEditTecnology(setIsLoadingEdit, data, currentTechnology, setModal);

  return (
    <Container>
      <HeaderModal title="Tecnologia Detalhes" setModal={setModal} />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Título"
          placeholder="Digite aqui a tecnologia"
          type="text"
          value={currentTechnology.title}
          disabled={true}
          register={register}
          name="title"
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

        <div className="divButtons">
          <Button
            type="submit"
            size="xlarge"
            color="pink"
            disabled={isLoadingEdit}
          >
            {isLoadingEdit ? "Alterando..." : "Salvar alterações"}
          </Button>
          <Button
            onClick={() =>
              handleDeleteTechnology(
                setIsLoadingDelete,
                currentTechnology,
                setModal
              )
            }
            size="large"
            color="gray"
            disabled={isLoadingDelete}
          >
            {isLoadingDelete ? "Excluindo..." : "Excluir"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export { ModalEditAndDeleteTechnology };
