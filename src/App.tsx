import React, { Fragment, useContext, useState } from 'react';
import GlobalStyle from './styles/global';
import { Routes } from './routes';
import {LanguageProvider} from './app/context/LanguageContext';
import {LightTheme, DarkTheme} from "./styles/theme";
import { ThemeProvider, useTheme} from 'styled-components';
const App = () => {
const theme = useTheme();

  return (
<ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
    <LanguageProvider>
      <Fragment>
        <GlobalStyle/>
        <Routes/>
      </Fragment>
    </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
