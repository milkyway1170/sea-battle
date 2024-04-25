import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/page/HomePage';
import { GlobalStyle } from './components/atoms/GlobalStyle';
import RoutesList from './constants/routes';
import { GamePage } from './components/page/GamePage';
import { InitialPage } from './components/page/InitialPage';
import { NamingPage } from './components/page/NamingPage';
import { WinPage } from './components/page/WinPage';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={RoutesList.HomePage} element={<HomePage />} />
        <Route path={RoutesList.InitialPage} element={<InitialPage />} />
        <Route path={RoutesList.GamePage} element={<GamePage />} />
        <Route path={RoutesList.NamingPage} element={<NamingPage />} />
        <Route path={RoutesList.WinPage} element={<WinPage />} />
      </Routes>
    </>
  );
};
