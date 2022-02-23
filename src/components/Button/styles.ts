import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export type WrapperProps = Pick<ButtonProps, "color">;

const wrapperModifiers = {
  default: () =>
    css`
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.darkGray};
    `,
  correct: () =>
    css`
      background-color: ${(props) => props.theme.colors.green};
      color: ${(props) => props.theme.colors.white};
    `,
  wrong: () =>
    css`
      background-color: ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.white};
    `,
};

export const ButtonWrapper = styled.button<WrapperProps>`
  ${({ color }) => css`
    ${!!color && wrapperModifiers[color]()}
  `}
  font-family: "Poppins", sans-serif;
  font-size: 20px;

  width: 180px;
  height: 80px;

  margin-left: auto;
  margin-right: auto;

  border-radius: 1.5rem;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.darkGray};
  border-width: 3px;
  :hover {
    cursor: pointer;
    box-shadow: inset 0 0 0 70vw rgba(0, 0, 0, 0.3);
  }
`;
