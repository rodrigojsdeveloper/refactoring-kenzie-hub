import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

interface IChildren {
  children: React.ReactNode;
}
interface ITechnology {
  id: number;
  name: string;
}
interface IUser {
  id: number;
  name: string;
}
interface ITechnologyContextData {
  technologies: ITechnology[];
  setTechnologies: React.Dispatch<React.SetStateAction<ITechnology[]>>;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export const TechnologyContext = createContext({} as ITechnologyContextData);

export const TechnologyContextProvider = ({ children }: IChildren) => {
  const token = localStorage.getItem("Kenzie Hub: token");

  const [user, setUser] = useState<IUser>({} as IUser);

  const [technologies, setTechnologies] = useState<ITechnology[]>([]);

  useEffect(() => {
    if (token) {
      api
        .get(`users/${user.id}`)
        .then((res) => setTechnologies(res.data.techs))
        .catch((error) => console.error("error", error));
    }
  }, []);

  return (
    <TechnologyContext.Provider
      value={{
        technologies,
        setTechnologies,
        setUser,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
};
