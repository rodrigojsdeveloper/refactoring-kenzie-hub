import styled, { css } from "styled-components";
import { IButtonStyle } from "../../interfaces";

const Container = styled.button<IButtonStyle>`
  width: 100%;
  height: 48px;

  font-weight: 500;
  font-size: 16px;
  line-height: 26.39px;
  color: var(--grey-0);

  transition: 0.4s;
  border-radius: var(--border-radius);

  &:disabled {
    cursor: not-allowed;
  }

  ${({ color }) => {
    switch (color) {
      case "pink":
        return css`
          background-color: var(--color-primary);

          &:hover {
            background-color: var(--color-primary-focus);
          }

          &:active,
          &:disabled {
            background-color: var(--color-primary-negative);
          }
        `;

      case "gray":
        return css`
          background-color: var(--grey-1);

          &:hover {
            background-color: var(--grey-hover);
          }

          &:active {
            background-color: var(--grey-2);
          }
        `;

      case "dark-grey":
        return css`
          background-color: var(--grey-3);
        `;

      default:
        return false;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "204px":
        return css`
          max-width: 204px;
          height: 48px;
        `;

      case "98px":
        return css`
          max-width: 98px;
          height: 48px;
        `;

      case "67.49px":
        return css`
          max-width: 67.49px;
          height: 40.11px;

          font-size: 14px;

          @media (max-width: 768px) {
            max-width: 79.54px;
          }
        `;

      case "55.49px":
        return css`
          max-width: 55.49px;
          height: 32px;

          font-weight: 600;
          font-size: 12px;
          line-height: 28.42px;
        `;

      case "32.49px":
        return css`
          max-width: 32.49px;
          height: 32px;
        `;

      default:
        return false;
    }
  }}

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21.1px;
  }
`;

export { Container };
