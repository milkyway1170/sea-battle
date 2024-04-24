import React from 'react';
import { EnemyField } from '@/components/atoms/EnemyField';
import { InitialField } from '@/components/atoms/InitialField';
import { $isFirstPlayer } from '@/models/is-first-player';
import { $playerNames } from '@/models/player-names';
import { Box, Button, Typography } from '@mui/material';
import { useStore } from 'effector-react';
import { $canShoot } from '@/models/can-shoot';

export interface GameFieldsProps {
  onClick: () => void;
}

export const GameFields = ({ onClick }: GameFieldsProps) => {
  const isFirstPlayer = useStore($isFirstPlayer);
  const { firstPlayer, secondPlayer } = useStore($playerNames);
  const canShoot = useStore($canShoot);

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
        {isFirstPlayer ? firstPlayer : secondPlayer}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5">Ваше поле:</Typography>
          <InitialField />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5">Поле противника :</Typography>
          <EnemyField />
        </Box>
      </Box>
      <Button onClick={onClick} variant="contained" disabled={canShoot}>
        Следующий игрок
      </Button>
    </Box>
  );
};
