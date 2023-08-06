import { IChildren, ITechnologyProps } from "../../interfaces";
import { createContext, useState } from "react";

interface ITechnologyContextData {
  technologies: ITechnologyProps[];
  setTechnologies: React.Dispatch<React.SetStateAction<ITechnologyProps[]>>;
  handleAddToTechnology: (technology: ITechnologyProps) => void;
}

const TechnologyContext = createContext({} as ITechnologyContextData);

const TechnologyContextProvider = ({ children }: IChildren) => {
  const [technologies, setTechnologies] = useState<ITechnologyProps[]>([]);

  const handleAddToTechnology = (technology: ITechnologyProps) =>
    setTechnologies([...technologies, technology]);

  return (
    <TechnologyContext.Provider
      value={{
        technologies,
        setTechnologies,
        handleAddToTechnology,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
};

export { TechnologyContext, TechnologyContextProvider };
