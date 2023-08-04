import { ITechnology } from "../../interfaces";
import { Container } from "./style";

const Card = ({ technology }: ITechnology) => {
  return (
    <Container>
      <p>{technology.title}</p>

      <p>{technology.status}</p>
    </Container>
  );
};

export { Card };
