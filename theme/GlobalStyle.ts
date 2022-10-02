import { createGlobalStyle } from "styled-components";
import { Color, FontSize, LineHeight, Spacing } from "./index";

export const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
    max-width: 100vw;
    width: 100%;
    font-size: ${FontSize.LEVEL_3};
    font-family: "Lato", sans-serif;
  }

  body {
    background: ${Color.WHITE};
    color: ${Color.FONT_DEFAULT};
    min-height: 100vh;
    max-width: 100vw;
    width: 100%;
    margin: 0;

    &.isOpen {
      overflow: hidden;
    }
  }

  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
  }

  form {
      margin: 0;
      width: 100%;
  }

  p {
    margin-bottom: ${Spacing.S};
  }

  ul {
      margin: 0;
  }

  p, span, div, strong {
    line-height: ${LineHeight.LEVEL_3};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: ${Spacing.S};
  }

  h1 {
    font-size: ${FontSize.LEVEL_6};
    line-height: ${LineHeight.LEVEL_6};
  }

  h2 {
    font-size: ${FontSize.LEVEL_5};
    line-height: ${LineHeight.LEVEL_5};
  }

  h3 {
    font-size: ${FontSize.LEVEL_4};
    line-height: ${LineHeight.LEVEL_4};
  }

  h4 {
    font-size: ${FontSize.LEVEL_3};
    line-height: ${LineHeight.LEVEL_3};
  }

  h5 {
    font-size: ${FontSize.LEVEL_3};
    line-height: ${LineHeight.LEVEL_3};
  }

  h6 {
    font-size: ${FontSize.LEVEL_3};
    line-height: ${LineHeight.LEVEL_3};
  }

  * {
    box-sizing: border-box;
    outline: 0;
    position: relative;

    &:focus {
      outline: none !important;
    }
  }
`;
