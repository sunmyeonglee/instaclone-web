import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#0095f6",
  bgColor: "#ffffff",
  fontColor: "rgb(38,38,38)",
  borderColor: "rgb(219,219,219)",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset};
    input {
      all:unset;
    }
    * {
      box-sizing: border-box;
    }
    body {
        background-color: ${(props) => props.theme.bgColor};
        font-size: 14px;
        font-family: -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial;
        color: ${(props) => props.theme.fontColor};
    }
    a {
      text-decoration: none;
      color: inherit;
    }

`;
