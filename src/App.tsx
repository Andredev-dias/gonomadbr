import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import { Routes } from './routes';
import { LanguageProvider } from './app/context/LanguageContext';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken =
  'pk.eyJ1IjoiZGVjb3NhbXVyYXkiLCJhIjoiY2w2bGJ0ZTU0MGE4NDNkbXJxaTFoaWhicyJ9.E7suFxe03-TU6SE0z_Rb9A';

const App = () => {
  return (
    <LanguageProvider>
      <Fragment>
        <GlobalStyle />
        <Routes />
      </Fragment>
    </LanguageProvider>
  );
};

export default App;
