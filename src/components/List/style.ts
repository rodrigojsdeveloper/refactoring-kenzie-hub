import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 798px;
  height: 469px;

  padding: 0 12px;
  margin: 0 auto 14.63px auto;

  & > .divTecnologies {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 11px 0 21px 0;

    & > h2 {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
    }
  }

  & > menu {
    width: 100%;
    height: 416px;

    padding: 23px 26px;
    background-color: var(--grey-3);
    border-radius: var(--border-radius);

    @media (max-width: 768px) {
      padding: 22px 8.5px;
    }
  }

  & > .divEmpty {
    height: 76px;
    width: 100%;
    max-width: 1440px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: flex-start;

    margin-top: 37px;

    & > h3 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }

    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24.36px;
    }
  }
`;

export { Container };
