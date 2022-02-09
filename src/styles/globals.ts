import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body::-webkit-scrollbar {
  width: 0px;
}

body {
  background: url("/bg.png") no-repeat center center fixed;
  box-shadow: inset 0 0 0 70vw ${(props) => props.theme.colors.darkGrayCover};
  background-size: cover;
  position: fixed;
  min-width: 100%;
  min-height: 100%;

  font-family: "Poppins", sans-serif;
}
`;
