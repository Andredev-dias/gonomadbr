import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: content-box;
  ::-webkit-scrollbar {
  width: 12px;
}
/* Track */
::-webkit-scrollbar-track {
  background:#282a36;
  width: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #44475a; 
  border-radius: 10px;
  width: 12px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:#8884d8; 
  cursor: pointer;
}
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
  --background: #DCDCDC;
  --lightBackground: 	#FFFAFA;
  --words:   #363636;
  --primary: #8884d8;
}
[data-theme='dark'] {
  --background: #282a36;
  --lightBackground:   #44475a;
  --words:   #f8f8f2;
  --primary: #8884d8;
}

`;
export default GlobalStyle;