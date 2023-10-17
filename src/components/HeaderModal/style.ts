import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;
  background-color: var(--grey-2);
  border-radius: var(--border-radius) var(--border-radius) 0 0;

  & > h2 {
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
  }

  & > button {
    color: var(--grey-1);
    background-color: var(--transparent);
  }
`;

export { Container };
