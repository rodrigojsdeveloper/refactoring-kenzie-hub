import { useEffect, useState } from "react";
import { IUserProps } from "../../interfaces";
import api from "../../services/api";
import { Container } from "./style";

const SubHeader = () => {
  const id = localStorage.getItem("Kenzie Hub: id");

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  useEffect(() => {
    api
      .get(`users/${id}`)
      .then((res) => setUser(res.data))
      .catch((error) => console.error("error", error));
  }, [id]);

  return (
    <Container height="subHeader">
      <div className="divSubHeader">
        <h1>Olá, {user.name}</h1>

        <p>{user.course_module}</p>
      </div>
    </Container>
  );
};

export { SubHeader };
