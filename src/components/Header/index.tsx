import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";
import { Logo } from "../Logo";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Logo />

        <Button
          color="dark-grey"
          size="small"
          onClick={() => {
            localStorage.clear();

            return navigate("/signin");
          }}
        >
          Sair
        </Button>
      </div>
    </Container>
  );
};

export { Header };
