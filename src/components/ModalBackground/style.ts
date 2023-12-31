import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 80px;

  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--shadow-1);

  overflow-y: auto;

  @media (max-width: 640px) {
    padding-right: 8px;
    padding-left: 8px;
  }
`;

export { Container };
