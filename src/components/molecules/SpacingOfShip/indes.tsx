import React from 'react';
import { Field } from '@/components/atoms/Field';
import { Box, Typography } from '@mui/material';
import { IFieldCell } from '@/types/types';
import { Store } from 'effector';
import { ShipsSelect } from '@/components/molecules/ShipsSelect';
import { $firstPlayer } from '@/models/first-player';
import { useStore } from 'effector-react';

export interface SpacingOfShipProps {
  player: string;
  $store: Store<IFieldCell[]>;
}

export const SpacingOfShip = ({ player, $store }: SpacingOfShipProps) => {
  // console.log('SpacingOfShip', useStore($firstPlayer));
  return (
    <>
      <Typography variant="h5">Растановка {player}:</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <ShipsSelect />
        <Field $store={$store} />
      </Box>
    </>
  );
};
