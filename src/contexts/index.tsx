import { TechnologyContextProvider } from "./TechnologyContext";

interface IChildren {
  children: React.ReactNode;
}

const Providers = ({ children }: IChildren) => {
  return <TechnologyContextProvider>{children}</TechnologyContextProvider>;
};

export { Providers };
