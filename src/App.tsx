import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import { Routes } from './routes';
import {LanguageProvider} from './app/context/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <Fragment>
        <GlobalStyle />
        <Routes/>
      </Fragment>
    </LanguageProvider>
  );
}

export default App;
