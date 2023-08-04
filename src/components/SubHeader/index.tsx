import { TechnologyContext } from "../../contexts/TechnologyContext";
import { Container } from "../Header/style";
import { useContext } from "react";

const SubHeader = () => {
  const { user } = useContext(TechnologyContext);

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
