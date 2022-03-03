import styled, { css } from "styled-components";

import { CardProps } from ".";
import theme from "../../styles/theme";

export type WrapperProps = Pick<CardProps, "color">;

const wrapperModifiers = {
  red: () => css`
    background-color: ${theme.colors.red};
  `,
  blue: () => css`
    background-color: ${theme.colors.blue};
  `,
  green: () => css`
    background-color: ${theme.colors.green};
  `,
  yellow: () => css`
    background-color: ${theme.colors.yellow};
  `,
};

export const CardWrapper = styled.a<WrapperProps>`
  ${({ color }) => css`
    ${!!color && wrapperModifiers[color]()}
  `}

  text-decoration: none;
  list-style: none;
  padding: 25px;
  color: #222;
  text-align: center;
  border-radius: 3rem;
  position: relative;
  box-shadow: 0px 0px 20px black;
  user-select: none;

  :hover {
    cursor: pointer;
    animation: bounce 0.5s linear;
    box-shadow: 1px 1px #53a7ea, 1px 1px #53a7ea, 1px 1px #53a7ea;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
  }
  @keyframes bounce {
    20% {
      transform: translateY(-6px);
    }
    40% {
      transform: translateY(0px);
    }

    80% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
