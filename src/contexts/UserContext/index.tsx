import { createContext, useEffect, useState } from "react";
import { IChildren, IUser } from "../../interfaces";
import api from "../../services/api";

interface IUserContextData {
  user: IUser;
}

const UserContext = createContext({} as IUserContextData);

const UserContextProvider = ({ children }: IChildren) => {
  const id = localStorage.getItem("Kenzie Hub: id");

  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    api
      .get(`users/${id}`)
      .then((res) => setUser(res.data))
      .catch((error) => console.error("error", error));
  }, [id]);

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
