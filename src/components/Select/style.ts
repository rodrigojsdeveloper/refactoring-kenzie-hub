import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  margin-bottom: 20px;

  & > label {
    font-weight: 400;
    font-size: 12.18px;
    line-height: 14px;

    margin-bottom: 13px;
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
      background-image: url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 15.873L12 7.873L20 15.873H4Z" fill="%23868E96"/></svg>');
    }

    &:focus::placeholder {
      color: var(--transparent);
    }

    &:disabled {
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      padding: 8.19px 12.99px;

      font-size: 14px;
      line-height: 21.1px;
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5px;

    & > span {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: var(--red);
    }

    & > svg {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
`;

export { Container };
