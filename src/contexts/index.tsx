import { TechnologyContextProvider } from "./technology.context";
import { IChildren } from "../interfaces";

const Providers = ({ children }: IChildren) => {
  return <TechnologyContextProvider>{children}</TechnologyContextProvider>;
};

export { Providers };
