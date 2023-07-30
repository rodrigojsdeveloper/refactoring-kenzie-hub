import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 375px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;
  background-color: var(--grey-3);

  padding: 42px 22.5px 28.19px 22.5px;

  & > h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  & > h2 {
    font-size: 400;
    font-size: 12px;
    line-height: 22px;

    color: var(--grey-1);
  }

  & > :is(h1, h2) {
    margin-bottom: 22px;
    text-align: center;
  }

  & > .divButtons {
    width: 100%;
    height: 170px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & > p {
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      text-align: center;

      color: var(--grey-1);
    }
  }

  @media (max-width: 425px) {
    padding: 34px 18px 34px 18px;
  }
`;

export { Container };
