import { createContext, useEffect, useState } from "react";
import { ITechnologyProps } from "../../interfaces";
import api from "../../services/api";

interface IChildren {
  children: React.ReactNode;
}
interface IUser {
  id: number;
  name: string;
}
interface ITechnologyContextData {
  technologies: ITechnologyProps[];
  setTechnologies: React.Dispatch<React.SetStateAction<ITechnologyProps[]>>;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export const TechnologyContext = createContext({} as ITechnologyContextData);

export const TechnologyContextProvider = ({ children }: IChildren) => {
  const token = localStorage.getItem("Kenzie Hub: token");

  const [user, setUser] = useState<IUser>({} as IUser);

  const [technologies, setTechnologies] = useState<ITechnologyProps[]>([]);

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
