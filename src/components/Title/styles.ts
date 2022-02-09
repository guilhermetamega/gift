import styled from "styled-components";
import { SectionWrapperProps } from ".";

export type WrapperProps = Pick<SectionWrapperProps, "home" | "href">;

export const TitleWrapper = styled.h1`
  color: ${(props) => props.theme.colors.darkGray};
  background-color: ${(props) => props.theme.colors.yellow};
  font-weight: 200;
  font-size: 51px;
  text-align: center;
  box-shadow: 0px 0px 20px black;
  border-radius: 2.3rem;
  margin: 4px 30px;
  padding: 0px 10px;
  flex: 2;
`;
export const SectionWrapper = styled.div<WrapperProps>`
  padding: 20px;
  animation: animate 50s linear infinite;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }

    50% {
      filter: hue-rotate(360deg);
    }

    100% {
      filter: hue-rotate(0deg);
    }
  }
`;
export const ImageWrapper = styled.img<WrapperProps>`
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 3rem;
  margin-top: 6px;
  margin-left: 3px;
  padding: 7px;
  animation: animate 140s linear infinite;

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

export const HomeLinkWrapper = styled.a``;
