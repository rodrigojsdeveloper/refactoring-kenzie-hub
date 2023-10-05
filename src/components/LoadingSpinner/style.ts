import { spin } from "../../animations";
import styled from "styled-components";

const Container = styled.svg`
  width: 20px;
  height: 20px;

  display: inline-block;

  border-radius: 50%;
  border: 3px solid;
  border-bottom-color: var(--grey-hover);

  box-sizing: border-box;
  animation: ${spin} 1s linear infinite;

  opacity: 0.3;
`;

export { Container };
