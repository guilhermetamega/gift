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
  background:${(props) => props.theme.colors.darkGray};
  font-family: "Poppins", sans-serif;
}
`;
