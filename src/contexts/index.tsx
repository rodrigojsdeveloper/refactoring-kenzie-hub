import { TechnologyContextProvider } from "./TechnologyContext";
import { IChildren } from "../interfaces";

const Providers = ({ children }: IChildren) => {
  return <TechnologyContextProvider>{children}</TechnologyContextProvider>;
};

export { Providers };
