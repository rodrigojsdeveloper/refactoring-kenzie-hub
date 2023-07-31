import { Container } from "./style";
import { Button } from "../Button";
import { Card } from "../Card";

const List = () => {
  return (
    <Container>
      <div>
        <h2>Tecnologias</h2>

        <Button color="dark-grey" size="xsmall">
          +
        </Button>
      </div>

      <menu>
        <Card />
        <Card />
        <Card />
      </menu>
    </Container>
  );
};

export { List };
