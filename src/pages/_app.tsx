import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/globals";
import theme from "../styles/theme";
import Main from "components/Main";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Component {...pageProps} />
        <GlobalStyle />
      </Main>
    </ThemeProvider>
  );
};

export default MyApp;
