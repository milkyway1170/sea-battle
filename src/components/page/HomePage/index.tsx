import React from 'react';
import Routes from '@/constants/routes';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { Colors } from '@/constants/colors';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = (): void => navigate(Routes.NamingPage);

  return (
    <Container>
      <Typography variant="h3">Добро пожаловать в игру Морской бой!</Typography>
      <Button onClick={handleClick} variant="contained">
        Начать игру
      </Button>
      {/* <Box
        sx={{
          width: '1rem',
          height: '1rem',
          background: Colors.White,
          border: ' 1px solid',
          display: 'flex',
          fontSize: '3rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        &#8226;
      </Box> */}
    </Container>
  );
};
