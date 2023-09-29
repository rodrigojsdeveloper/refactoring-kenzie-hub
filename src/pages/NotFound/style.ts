import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  padding: 10px;

  & > div {
    & > h1 {
      font-weight: 700;
      font-size: 38px;
      line-height: 50px;
    }

    & > p {
      width: 100%;
      max-width: 334px;

      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      padding: 15px 0 25px 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    svg {
      margin-top: 40px;
      width: 100%;
    }
  }
`;

export { Container };
