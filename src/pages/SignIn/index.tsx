import { FormSignIn } from "../../components/Forms/FormSignIn";
import { Logo } from "../../components/Logo";
import { Container } from "./style";

const SignIn = () => {
  return (
    <Container>
      <Logo />

      <FormSignIn />
    </Container>
  );
};

export { SignIn };
