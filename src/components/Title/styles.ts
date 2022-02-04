import styled from "styled-components";

export const TitleWrapper = styled.h1`
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: 200;
  font-size: 52px;
`;
export const SectionWrapper = styled.div`
  padding: 20px;
  margin: 0 auto;

  h1 {
    box-shadow: 0px 0px 20px black;
    text-align: center;
    background-color: ${(props) => props.theme.colors.yellow};
    border-radius: 4rem;
    margin: 5px;
  }
`;
