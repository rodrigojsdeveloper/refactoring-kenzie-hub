import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 329.93px;
  height: 75px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  margin-bottom: 22px;

  & > label {
    font-weight: 400;
    font-size: 12.18px;
    line-height: 14px;
  }

  & > input {
    width: 100%;
    height: 48px;

    border-radius: 4px;
    color: var(--grey-0);
    border: 1px solid var(--grey-2);
    background-color: var(--grey-2);

    padding: 0 16px;

    font-weight: 400;
    font-size: 16.24px;
    line-height: 26.39px;

    &::placeholder {
      color: var(--grey-1);
    }

    &:focus {
      border: 1px solid var(--grey-0);
    }

    &:focus::placeholder {
      color: transparent;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      padding: 0 12.99px;

      font-size: 12.99px;
      line-height: 21.1px;
    }
  }
`;

export { Container };
