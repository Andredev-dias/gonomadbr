import React, { Fragment, useContext, useState } from 'react';
import GlobalStyle from './styles/global';
import { Routes } from './routes';
import {LanguageProvider} from './app/context/LanguageContext';
import {LightTheme, DarkTheme} from "./styles/theme";
import { ThemeProvider, useTheme} from 'styled-components';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVjb3NhbXVyYXkiLCJhIjoiY2w2bGJ0ZTU0MGE4NDNkbXJxaTFoaWhicyJ9.E7suFxe03-TU6SE0z_Rb9A';
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
