import React from 'react';
import { $isFirstPlayer } from '@/models/is-first-player';
import { $playerNames } from '@/models/player-names';
import { Box, Button, Typography } from '@mui/material';
import { useStore } from 'effector-react';

export interface RotationPlayerProps {
  onClick: () => void;
}

export const RotationPlayer = ({ onClick }: RotationPlayerProps) => {
  const isFirstPlayer = useStore($isFirstPlayer);
  const { firstPlayer, secondPlayer } = useStore($playerNames);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5">
        Меняемся, теперь ходит {isFirstPlayer ? firstPlayer : secondPlayer}
      </Typography>
      <Button onClick={onClick} variant="contained">
        Продолжим
      </Button>
    </Box>
  );
};
