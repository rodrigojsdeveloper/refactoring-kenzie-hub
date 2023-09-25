import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;

  margin-top: 37px;

  & > h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    margin-bottom: 12.5px;
  }

  & > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    color: var(--grey-1);
  }
`;

export { Container };
