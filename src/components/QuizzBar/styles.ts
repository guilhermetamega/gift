import styled from "styled-components";

export const QuizzBackgroundWrapper = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 2rem;
  margin: 30px;
  padding: 10px;
`;

export const ButtonGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;
`;

export const QuizzTitleWrapper = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;
