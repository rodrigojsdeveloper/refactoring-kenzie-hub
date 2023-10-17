import { TechnologyContextProvider } from "./technology.context";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return <TechnologyContextProvider>{children}</TechnologyContextProvider>;
};

export { Providers };
