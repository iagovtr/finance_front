import { createGlobalStyle } from "styled-components";

export const MENU_WIDTH = "210px";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #F8F8FA;
    font-family: 'Montserrat', sans-serif;
  }

  input, button, select, textarea {
    min-height: 35px;
    border-radius: 4px;
  }

  input {
    outline: none;
    border: 1px solid;
    padding-left: 32px;
    color: #808496;

    &:focus {
      border: 1px solid;
    }
  }

  button {
    cursor: pointer;
    border: 1px solid;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
