import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#fafafa",
  borderColor: "#rgb(219,219,219)",
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
        background-color: #fff;
        font-size: 14px;
        font-family: -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial;
        color: rgb(38,38,38);
    }
    a {
      text-decoration: none;
    }

`;