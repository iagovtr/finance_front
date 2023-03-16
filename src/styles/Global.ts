import { createGlobalStyle } from "styled-components";

export const MENU_WIDTH = "210px";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  input, button {
    min-height: 35px;
    border-radius: 4px;

    &:hover, &:focus {
      border: 1px solid;
    }
  }

  input {
    outline: none;
    border: 0;
    padding-left: 32px;
    color: #808496;
  }
`;
