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

:root {
  --background: #282a36;
  --light-background: #44475a;
  --white: #f8f8f2;
  --cyan:#8be9fd;
}
`;

export default GlobalStyle;