import { createContext, useState } from "react";

interface IChildren {
  children: React.ReactNode;
}

interface ITechnologyContextData {}

export const TechnologyContext = createContext({} as ITechnologyContextData);

export const TechnologyContextProvider = ({ children }: IChildren) => {
  const [technologies, setTechnologies] = useState([])

  return (
    <TechnologyContext.Provider value={{}}>
      {children}
    </TechnologyContext.Provider>
  );
};
