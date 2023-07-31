import { Container } from "./style";
import { Button } from "../Button";
import { Logo } from "../Logo";

const Header = () => {
  return (
    <Container>
      <div>
        <Logo />

        <Button color="dark-grey" size="small">
          Sair
        </Button>
      </div>
    </Container>
  );
};

export { Header };
