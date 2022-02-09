import styled from "styled-components";

export const CardTitleWrapper = styled.h2`
  color: ${(props) => props.theme.colors.darkGrey};
  text-transform: capitalize;
  margin-bottom: 0px;
  font-size: 22px;
  font-weight: bold;
  position: relative;
  z-index: 2;
`;
