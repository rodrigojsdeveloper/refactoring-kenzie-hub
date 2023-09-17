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

  & > select {
    width: 100%;
    height: 48px;

    border: 1px solid var(--grey-2);
    background-color: var(--grey-2);
    border-radius: var(--border-radius);

    padding-left: 15px;

    font-weight: 400;
    font-size: 16.24px;
    line-height: 26.39px;
    color: var(--grey-1);

    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10.127L12 18.127L20 10.127H4Z" fill="%23868E96"/></svg>');
    background-repeat: no-repeat;
    background-position: 0;
    background-position-x: 96%;

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
      font-size: 12.99px;
      line-height: 21.1px;
    }
  }
`;

export { Container };
