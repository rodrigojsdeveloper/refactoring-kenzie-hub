import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 49px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--grey-4);
  border-radius: var(--border-radius);

  padding: 13px 22.22px;

  cursor: pointer;

  &:hover {
    background-color: var(--grey-2);
    transition: background 0.5s ease 0s;

    & > .status {
      color: var(--grey-0);
    }
  }

  & > .title {
    font-weight: 600;
  }

  & > .status {
    font-weight: 400;
    font-size: 12.18px;
    line-height: 22.33px;

    color: var(--grey-1);
  }

  @media (max-width: 640px) {
    padding: 12.18px;
  }
`;

export { Container };
