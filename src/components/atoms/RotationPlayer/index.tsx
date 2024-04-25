import React from 'react';
import { $isFirstPlayer } from '@/models/is-first-player';
import { $playerNames } from '@/models/player-names';
import { Button, Typography } from '@mui/material';
import { useStore } from 'effector-react';
import { Container } from './style';

export interface RotationPlayerProps {
  onClick: () => void;
}

export const RotationPlayer = ({ onClick }: RotationPlayerProps) => {
  const isFirstPlayer = useStore($isFirstPlayer);
  const { firstPlayer, secondPlayer } = useStore($playerNames);

  return (
    <Container>
      <Typography variant="h5">
        Меняемся, теперь ходит {isFirstPlayer ? firstPlayer : secondPlayer}
      </Typography>
      <Button onClick={onClick} variant="contained">
        Продолжим
      </Button>
    </Container>
  );
};
