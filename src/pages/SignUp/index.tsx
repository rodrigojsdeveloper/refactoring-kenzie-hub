import { FormSignUp } from "../../components/Forms/FormSignUp";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./style";
import { Logo } from "../../components/Logo";
import { useEffect } from "react";

const SignUp = () => {
  const token = localStorage.getItem("Kenzie Hub: token") ?? "";

  const navigate = useNavigate();

  useEffect(() => {
    if (token) return navigate("/signin");
  }, [token]);

  return (
    <Container>
      <Content>
        <div>
          <Logo />

          <Button
            color="dark-grey"
            size="medium"
            onClick={() => navigate("/dashboard")}
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
