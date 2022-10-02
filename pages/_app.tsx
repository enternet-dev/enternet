import type { AppProps } from "next/app";
import { BaseCSS, GridThemeProvider } from "styled-bootstrap-grid";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme";
import { gridTheme } from "../theme/gridTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <BaseCSS />
      <GlobalStyle />
      <GridThemeProvider gridTheme={gridTheme}>
        <>
          <Component {...pageProps} />
        </>
      </GridThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
