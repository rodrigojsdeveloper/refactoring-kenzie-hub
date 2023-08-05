import { FormSignIn } from "../../components/Forms/FormSignIn";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { Container } from "./style";
import { useEffect } from "react";

const SignIn = () => {
  const token = localStorage.getItem("Kenzie Hub: token") ?? "";

  const navigate = useNavigate();

  useEffect(() => {
    if (token) return navigate("/dashboard");
  }, [token]);

  return (
    <Container>
      <Logo />

      <FormSignIn />
    </Container>
  );
};

export { SignIn };
