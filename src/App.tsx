import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './page/Home';
import RoutesList from './constants/routes';

export const App = () => {
  return (
    <Routes>
      <Route path={RoutesList.HomePage} element={<HomePage />} />
    </Routes>
  );
};
