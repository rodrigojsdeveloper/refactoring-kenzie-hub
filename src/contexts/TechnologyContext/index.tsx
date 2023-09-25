import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import {
  IChildren,
  ITechnologyProps,
  ITechnologyContextData,
} from "../../interfaces";

const TechnologyContext = createContext({} as ITechnologyContextData);

const TechnologyContextProvider = ({ children }: IChildren) => {
  const token = localStorage.getItem("Kenzie Hub: token") ?? "";

  const [technologies, setTechnologies] = useState<ITechnologyProps[]>([]);

  const handleAddToTechnology = (technology: ITechnologyProps) =>
    setTechnologies([...technologies, technology]);

  const handleEditTecnology = (
    setIsLoadingEdit: React.Dispatch<React.SetStateAction<boolean>>,
    data: any,
    currentTechnology: ITechnologyProps,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
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

        setTechnologies([newTechnology, ...newListTechnologies]);

        toast.success("Tecnologia alterada com sucesso!");
      })
      .catch((error) => {
        toast.error("Não foi possível alterar a tecnologia!");

        console.error("error", error);
      })
      .finally(() => setIsLoadingEdit(false));
  };

  const handleDeleteTechnology = (
    setIsLoadingDelete: React.Dispatch<React.SetStateAction<boolean>>,
    currentTechnology: ITechnologyProps,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
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

        toast.success("Tecnologia excluída com sucesso!");
      })
      .catch((error) => {
        toast.error("Não foi possível excluir a tecnologia!");

        console.error("error", error);
      })
      .finally(() => setIsLoadingDelete(false));
  };

  return (
    <TechnologyContext.Provider
      value={{
        technologies,
        setTechnologies,
        handleAddToTechnology,
        handleEditTecnology,
        handleDeleteTechnology,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
};

export { TechnologyContext, TechnologyContextProvider };
