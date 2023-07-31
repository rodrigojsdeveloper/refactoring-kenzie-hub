import { FormSignUp } from "../../components/Forms/FormSignUp";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./style";
import { Logo } from "../../components/Logo";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <div>
          <Logo />

          <Button
            color="dark-grey"
            size="medium"
            onClick={() => navigate("/signin")}
          >
            Voltar
          </Button>
        </div>

        <FormSignUp />
      </Content>
    </Container>
  );
};

export { SignUp };
