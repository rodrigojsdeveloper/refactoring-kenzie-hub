import { IHeaderStyle } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.header<IHeaderStyle>`
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 17px 8px;
  border-bottom: 1.5px solid var(--grey-3);

  ${({ height }) => {
    switch (height) {
      case "subHeader":
        return css`
          height: 118px;
        `;

      default:
        return false;
    }
  }}

  & > div {
    width: 100%;
    max-width: 770.27px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }

    & > p {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;

      color: var(--grey-1);
    }
  }
`;

export { Container };
