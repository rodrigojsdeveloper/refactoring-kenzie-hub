import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;
  background: var(--grey-2);
  border-radius: 4px 4px 0 0;

  & > h2 {
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
  }

  & > button {
    color: var(--grey-1);
    background-color: var(--transparent);
  }

  @media (max-width: 425px) {
    padding: 15px 10px;
  }
`;

export { Container };