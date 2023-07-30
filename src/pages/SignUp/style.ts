import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 49.46px 12px 46px 12px;
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
