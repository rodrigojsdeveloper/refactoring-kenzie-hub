import { TechnologyContext } from "../../contexts/TechnologyContext";
import { Container } from "./style";
import { Button } from "../Button";
import { useContext } from "react";
import { Card } from "../Card";

const List = () => {
  const { technologies } = useContext(TechnologyContext);

  return (
    <Container>
      <div>
        <h2>Tecnologias</h2>

        <Button color="dark-grey" size="xsmall">
          +
        </Button>
      </div>

      <menu>
        {technologies.map((technology) => (
          <Card technology={technology} key={technology.id} />
        ))}
      </menu>
    </Container>
  );
};

export { List };
