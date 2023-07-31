import { Container } from "./style";
import { Button } from "../Button";

const List = () => {
  return (
    <Container>
      <div>
        <h2>Tecnologias</h2>

        <Button color="dark-grey" size="xsmall">
          +
        </Button>
      </div>

      <menu></menu>
    </Container>
  );
};

export { List };
