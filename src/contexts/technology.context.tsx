import { ITechnologyProps, ITechnologyContextData } from "../interfaces";
import { createContext, useState, PropsWithChildren } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

const TechnologyContext = createContext({} as ITechnologyContextData);

const TechnologyContextProvider = ({ children }: PropsWithChildren) => {
  const token = localStorage.getItem("Kenzie Hub: token");

  const [technologies, setTechnologies] = useState<ITechnologyProps[]>([]);

  const handleAddToTechnology = (technology: ITechnologyProps) =>
    setTechnologies([technology, ...technologies]);

  const fetchTechnologies = (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    id: string | null
  ) => {
    if (id) {
      api
        .get(`users/${id}`)
        .then((res) => {
          handleAddToTechnology(res.data.techs);

          setTechnologies(res.data.techs);
        })
        .catch((error) => console.error("error", error))
        .finally(() => setLoading(false));
    }
  };

  const handlePostTechnologies = (
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    data: Partial<ITechnologyProps>
  ) => {
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

  const technologyContextData: ITechnologyContextData = {
    technologies,
    setTechnologies,
    fetchTechnologies,
    handleAddToTechnology,
    handlePostTechnologies,
    handleEditTecnology,
    handleDeleteTechnology,
  };

  return (
    <TechnologyContext.Provider value={technologyContextData}>
      {children}
    </TechnologyContext.Provider>
  );
};

export { TechnologyContext, TechnologyContextProvider };
