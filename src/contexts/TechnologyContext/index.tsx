import { IChildren, ITechnologyProps } from "../../interfaces";
import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

interface ITechnologyContextData {
  technologies: ITechnologyProps[];
  setTechnologies: React.Dispatch<React.SetStateAction<ITechnologyProps[]>>;
  addTechnology: (technology: ITechnologyProps) => void;
}

const TechnologyContext = createContext({} as ITechnologyContextData);

const TechnologyContextProvider = ({ children }: IChildren) => {
  const id = localStorage.getItem("Kenzie Hub: id");

  const [technologies, setTechnologies] = useState<ITechnologyProps[]>([]);

  const addTechnology = (technology: ITechnologyProps) =>
    setTechnologies([...technologies, technology]);

  useEffect(() => {
    api
      .get(`users/${id}`)
      .then((res) => setTechnologies(res.data.techs))
      .catch((error) => console.error("error", error));
  }, [id]);

  return (
    <TechnologyContext.Provider
      value={{
        technologies,
        setTechnologies,
        addTechnology,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
};

export { TechnologyContext, TechnologyContextProvider };
