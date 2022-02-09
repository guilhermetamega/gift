import styled from "styled-components";

export const TitleWrapper = styled.h1`
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: 200;
  font-size: 51px;
  box-shadow: 0px 0px 20px black;
  text-align: center;
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 2.3rem;
  margin: 4px;
`;
export const SectionWrapper = styled.div`
  padding: 20px;
  animation: animate 50s linear infinite;

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
