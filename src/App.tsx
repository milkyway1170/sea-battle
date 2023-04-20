import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/page/HomePage';
import { GlobalStyle } from './components/atoms/GlobalStyle';
import RoutesList from './constants/routes';
import { GamePage } from './components/page/GamePage';
import { LocationPage } from './components/page/LocationPage';
import { NamingPage } from './components/page/NamingPage';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={RoutesList.HomePage} element={<HomePage />} />
        <Route path={RoutesList.LocationPage} element={<LocationPage />} />
        <Route path={RoutesList.GamePage} element={<GamePage />} />
        <Route path={RoutesList.NamingPage} element={<NamingPage />} />
      </Routes>
    </>
  );
};
