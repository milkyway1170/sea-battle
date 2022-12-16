import { Button, Typography } from '@mui/material';
import React from 'react';
import { Container } from './styles';

export const HomePage = () => {
  return (
    <Container>
      <Typography variant="h3">Добро пожаловать в игру Морской бой!</Typography>
      <Button variant="contained">Начать игру</Button>
    </Container>
  );
};
