import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/page/HomePage';
import { GlobalStyle } from './components/atoms/GlobalStyle';
import RoutesList from './constants/routes';
import { Field } from './components/atoms/Field';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={RoutesList.HomePage} element={<HomePage />} />
        <Route path={RoutesList.GamePage} element={<Field />} />
      </Routes>
    </>
  );
};
