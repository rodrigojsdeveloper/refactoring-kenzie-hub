import { UserContext } from "../../contexts/UserContext";
import { Container } from "./style";
import { useContext } from "react";

const SubHeader = () => {
  const { user } = useContext(UserContext);

  const { name, course_module } = user;

  return (
    <Container height="subHeader">
      <div className="divSubHeader">
        <h1>Olá, {name}</h1>

        <p>{course_module}</p>
      </div>
    </Container>
  );
};

export { SubHeader };
