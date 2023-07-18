import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 375px;

  border-radius: 4px;
  background-color: var(--grey-3);

  text-align: center;
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
  }
`;

export { Container };
