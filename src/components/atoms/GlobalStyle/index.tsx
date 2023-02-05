import { css, GlobalStyles } from '@mui/material';
import React, { FC } from 'react';

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    height: 100%;
  }
`;

export const GlobalStyle: FC = () => {
  return <GlobalStyles styles={globalStyle} />;
};
