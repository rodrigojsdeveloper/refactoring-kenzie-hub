import { animationForm } from "../../animations";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  justify-content: center;

  padding: 49.46px 8px 46px 8px;

  animation: ${animationForm} 1s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 375px;

  & > div {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 31.62px;
  }
`;

export { Container, Content };
