import { FormSignIn } from "../../components/Forms/FormSignIn";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";
import React, { useEffect } from "react";
import { Container } from "./style";

const SignIn = () => {
  const token = localStorage.getItem("Kenzie Hub: token") ?? "";

  const navigate = useNavigate();

  useEffect(() => {
    if (token) return navigate("/dashboard");
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Entrar | Kenzie Hub" />
      </HelmetProvider>
      <Container>
        <Logo />

        <FormSignIn />
      </Container>
    </React.Fragment>
  );
};

export { SignIn };
