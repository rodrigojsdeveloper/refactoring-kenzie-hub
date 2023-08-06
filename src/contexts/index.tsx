import { TechnologyContextProvider } from "./TechnologyContext";
import { UserContextProvider } from "./UserContext";
import { IChildren } from "../interfaces";

const Providers = ({ children }: IChildren) => {
  return (
    <UserContextProvider>
      <TechnologyContextProvider>{children}</TechnologyContextProvider>
    </UserContextProvider>
  );
};

export { Providers };
