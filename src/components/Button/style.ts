import styled, { css } from "styled-components";

interface IButtonStyle {
  size: "xxlarge" | "xlarge" | "large" | "medium" | "small" | "xsmall";
  color: "pink" | "gray" | "dark-grey";
}

const Container = styled.button<IButtonStyle>`
  width: 100%;

  font-weight: 500;
  font-size: 16px;
  line-height: 26.39px;
  color: var(--grey-0);

  transition: 0.4s;
  border-radius: 4px;

  ${({ color }) => {
    switch (color) {
      case "pink":
        return css`
          background-color: var(--color-primary);

          &:hover {
            background-color: var(--color-primary-negative);
          }
        `;

      case "gray":
        return css`
          background-color: var(--grey-1);

          &:hover {
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
      case "xxlarge":
        return css`
          max-width: 326px;
          height: 48px;
        `;

      case "xlarge":
        return css`
          max-width: 204px;
          height: 48px;
        `;

      case "large":
        return css`
          max-width: 98px;
          height: 48px;
        `;

      case "medium":
        return css`
          max-width: 67.49px;
          height: 40.11px;

          @media (max-width: 768px) {
            font-weight: 600;
            font-size: 12px;
            line-height: 28.42px;
          }
        `;

      case "small":
        return css`
          max-width: 55.49px;
          height: 32px;

          font-weight: 600;
          font-size: 12px;
          line-height: 28.42px;
        `;

      case "xsmall":
        return css`
          max-width: 32.49px;
          height: 32px;
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
