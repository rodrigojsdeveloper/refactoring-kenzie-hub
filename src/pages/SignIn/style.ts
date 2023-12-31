import { animationForm } from "../../animations";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 49.46px 8px 46px 8px;

  animation: ${animationForm} 1s;

  & > form {
    margin-top: 35.7px;
  }
`;

export { Container };
