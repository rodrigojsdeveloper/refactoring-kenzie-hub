import { FormSignUp } from "../../components/Forms/FormSignUp";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./style";
import { Logo } from "../../components/Logo";
import React, { useEffect } from "react";

const SignUp = () => {
  const token = localStorage.getItem("Kenzie Hub: token") ?? "";

  const navigate = useNavigate();

  useEffect(() => {
    if (token) return navigate("/signin");
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Cadastrar | Kenzie Hub" />
      </HelmetProvider>
      <Container>
        <Content>
          <div>
            <Logo />

            <Button
              color="dark-grey"
              size="67.49px"
              onClick={() => navigate("/")}
            >
              Voltar
            </Button>
          </div>

          <FormSignUp />
        </Content>
      </Container>
    </React.Fragment>
  );
};

export { SignUp };
