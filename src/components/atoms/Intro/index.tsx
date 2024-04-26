import React from 'react';
import { Button, Typography } from '@mui/material';
import { Container } from './style';

export interface IntroProps {
  onClick: () => void;
}

export const Intro = ({ onClick }: IntroProps) => {
  return (
    <Container>
      <Typography variant="h5">
        Теперь мы можем начать бой. Вы ходите по очереди, между ходами ваши поля
        с кораблями будут спрятаны, чтобы вы могли меняться и не подглядывать.
      </Typography>
      <Button onClick={onClick} variant="contained">
        Погнали
      </Button>
    </Container>
  );
};
