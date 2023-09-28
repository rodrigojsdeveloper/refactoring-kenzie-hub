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

    overflow-y: auto;

    &::-webkit-scrollbar-track {
      background-color: var(--grey-3);
      border-radius: var(--border-radius);
    }

    @media (max-width: 425px) {
      padding: 15px 10px;
    }
  }
`;

export { Container };
