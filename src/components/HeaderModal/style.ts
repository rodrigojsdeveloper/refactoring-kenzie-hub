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
    font-size: 14px;
    line-height: 16px;
  }

  & > button {
    background-color: var(--transparent);
  }

  & > :is(h2, button) {
    color: var(--grey-1);
  }
`;

export { Container };
