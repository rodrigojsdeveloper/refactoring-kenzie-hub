import { TechnologyContext } from "../../contexts/TechnologyContext";
import { IModalEditAndDeleteTechnology } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Container } from "./style";
import { Select } from "../Select";
import { Button } from "../Button";
import { Input } from "../Input";

const ModalEditAndDeleteTechnology = ({
  setModal,
  currentTechnology,
}: IModalEditAndDeleteTechnology) => {
  const { technologies, setTechnologies } = useContext(TechnologyContext);

  const token = localStorage.getItem("Kenzie Hub: token") ?? "";

  const [isLoadingEdit, setIsLoadingEdit] = useState(false);

  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data: any) => {
    setIsLoadingEdit(true);

    const { status } = data;

    api
      .put(
        `/users/techs/${currentTechnology.id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        setModal(false);

        const newTechnology = { ...currentTechnology, status };

        const newListTechnologies = technologies.filter(
          (technology) => technology.id !== currentTechnology.id
        );

        setTechnologies([...newListTechnologies, newTechnology]);
      })
      .catch((error) => console.error("error", error))
      .finally(() => setIsLoadingEdit(false));
  };

  const deleteTechnology = () => {
    setIsLoadingDelete(true);

    api
      .delete(`/users/techs/${currentTechnology.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setModal(false);

        const newListTechnologies = technologies.filter(
          (technology) => technology.id !== currentTechnology.id
        );

        setTechnologies(newListTechnologies);
      })
      .catch((error) => console.error("error", error))
      .finally(() => setIsLoadingDelete(false));
  };

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

        <Select label="Selecionar status" register={register} name="status">
          <option>Iniciante</option>
          <option>Intermediário</option>
          <option>Avançado</option>
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
            onClick={deleteTechnology}
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
