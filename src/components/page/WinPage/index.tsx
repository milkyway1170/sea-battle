import React from 'react';
import Routes from '@/constants/routes';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { $isFirstPlayer } from '@/models/is-first-player';
import { useStore } from 'effector-react';
import { $playerNames } from '@/models/player-names';

export const WinPage = () => {
  const navigate = useNavigate();
  const { firstPlayer, secondPlayer } = useStore($playerNames);
  const isFirstPlayer = useStore($isFirstPlayer);

  const handleClick = (): void => navigate(Routes.HomePage);

  return (
    <Container>
      <Typography variant="h3">
        Поздравляем! Игрок {isFirstPlayer ? firstPlayer : secondPlayer} победил!
      </Typography>
      <Button onClick={handleClick} variant="contained">
        Начать новую игру
      </Button>
    </Container>
  );
};
