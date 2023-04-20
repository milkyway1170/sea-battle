import React from 'react';
import Routes from '@/constants/routes';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = (): void => navigate(Routes.NamingPage);

  return (
    <Container>
      <Typography variant="h3">Добро пожаловать в игру Морской бой!</Typography>
      <Button onClick={handleClick} variant="contained">
        Начать игру
      </Button>
    </Container>
  );
};
