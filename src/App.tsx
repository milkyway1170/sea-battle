import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/page/Home';
import { GlobalStyle } from './components/page/Home/atoms/GlobalStyle';
import RoutesList from './constants/routes';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={RoutesList.HomePage} element={<HomePage />} />
      </Routes>
    </>
  );
};
