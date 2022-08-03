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
html, body, #root {
  width: 100%;
  height: 100%;
}

body, header, code {
  font-family: "Co Text", sans-serif;
}

/* body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */

:root {
  --background: #282a36;
  --light-background: #44475a;
  --white: #f8f8f2;
  --cyan:#8be9fd;
}
`;

export default GlobalStyle;