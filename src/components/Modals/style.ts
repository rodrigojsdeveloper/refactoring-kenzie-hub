import { animationForm } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 369px;
  height: fit-content;

  background-color: var(--grey-3);
  border-radius: var(--border-radius);

  animation: ${animationForm} 1s;

  & > form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 22px 22.5px;

    @media (max-width: 768px) {
      padding: 22px 17.99px;
    }
  }

  .divButtons {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    & > button:nth-last-child(1) {
      margin-left: 15px;
    }
  }

  @media (max-width: 425px) {
    height: fit-content;

    .divButtons {
      flex-direction: column;

      & > button {
        max-width: unset;
      }

      & > button:nth-last-child(1) {
        margin-top: 15px;
        margin-left: 0;
      }
    }
  }
`;

export { Container };
