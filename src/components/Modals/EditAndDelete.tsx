import { TechnologyContext } from "../../contexts/technology.context";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingSpinner } from "../LoadingSpinner";
import { HeaderModal } from "../HeaderModal";
import { useContext, useState } from "react";
import { Container } from "./style";
import { Select } from "../Select";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";
import {
  ITechnologyProps,
  IModalEditAndDeleteTechnology,
} from "../../interfaces";

const ModalEditAndDeleteTechnology = ({
  setModal,
  currentTechnology,
}: IModalEditAndDeleteTechnology) => {
  const { handleEditTecnology, handleDeleteTechnology } =
    useContext(TechnologyContext);

  const [isLoadingEdit, setIsLoadingEdit] = useState<boolean>(false);

  const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

  const schema = yup.object().shape({
    status: yup.string().required("Status obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: FieldValues) => {
    const technology: ITechnologyProps = {
      id: data.id,
      status: data.status,
      title: data.title
    }

    handleEditTecnology(setIsLoadingEdit, technology, currentTechnology, setModal);
  }

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
          defaultValue={currentTechnology.status}
          htmlFor="status"
          id="status"
          error={errors.status?.message}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </Select>

        <div className="divButtons">
          <Button
            type="submit"
            size="204px"
            color="pink"
            disabled={isLoadingEdit}
          >
            {isLoadingEdit ? <LoadingSpinner /> : "Salvar alterações"}
          </Button>
          <Button
            onClick={() =>
              handleDeleteTechnology(
                setIsLoadingDelete,
                currentTechnology,
                setModal
              )
            }
            size="98px"
            color="gray"
            disabled={isLoadingDelete}
          >
            {isLoadingDelete ? <LoadingSpinner /> : "Excluir"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export { ModalEditAndDeleteTechnology };
