import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body {
  background: url("/bg.png") no-repeat center center fixed;
  background-size: cover;
  min-width: 100%;
  min-height: 100%;

  font-family: "Poppins", sans-serif;
}
body::-webkit-scrollbar {
  width: 0px;
}

footer{
  color:${(props) => props.theme.colors.yellow};
  text-align:center;
}
`;
