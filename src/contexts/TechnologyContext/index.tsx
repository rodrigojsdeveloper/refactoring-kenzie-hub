import { IChildren, ITechnologyProps, IUser } from "../../interfaces";
import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

interface ITechnologyContextData {
  technologies: ITechnologyProps[];
  setTechnologies: React.Dispatch<React.SetStateAction<ITechnologyProps[]>>;
  user: IUser;
  addTechnology: (technology: ITechnologyProps) => void;
}

export const TechnologyContext = createContext({} as ITechnologyContextData);

export const TechnologyContextProvider = ({ children }: IChildren) => {
  const token = localStorage.getItem("Kenzie Hub: token");

  const id = localStorage.getItem("Kenzie Hub: id");

  const [user, setUser] = useState<IUser>({} as IUser);

  const [technologies, setTechnologies] = useState<ITechnologyProps[]>([]);

  const addTechnology = (technology: ITechnologyProps) =>
    setTechnologies([...technologies, technology]);

  useEffect(() => {
    if (token) {
      api
        .get(`users/${id}`)
        .then((res) => setTechnologies(res.data.techs))
        .catch((error) => console.error("error", error));

      api
        .get(`users/${id}`)
        .then((res) => setUser(res.data))
        .catch((error) => console.error("error", error));
    }
  }, []);

  return (
    <TechnologyContext.Provider
      value={{
        technologies,
        setTechnologies,
        user,
        addTechnology,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
};
