import React from 'react';
import { InitialField } from '@/components/molecules/InitialField';
import { Box, Typography } from '@mui/material';
import { ShipsList } from '@/components/molecules/ShipsList';
import { useStore } from 'effector-react';
import { $playerNames } from '@/models/player-names';
import { $isFirstPlayer } from '@/models/is-first-player';

export const SpacingOfShip = () => {
  const isFirstPlayer = useStore($isFirstPlayer);
  const { firstPlayer, secondPlayer } = useStore($playerNames);

  return (
    <>
      <Typography variant="h5">
        Растановка {isFirstPlayer ? firstPlayer : secondPlayer}:
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <ShipsList />
        <InitialField />
      </Box>
    </>
  );
};
