import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: content-box;
}

*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  word-break: normal;
}

body, header, code {
  font-family: "Co Text", sans-serif;
}

`;
export default GlobalStyle;