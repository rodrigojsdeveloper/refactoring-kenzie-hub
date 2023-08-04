import { animationForm } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 369px;
  height: 340px;

  border-radius: 4px;
  background-color: var(--grey-3);

  animation: ${animationForm} 1s;

  & > form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px 10px;
  }
`;

export { Container };
