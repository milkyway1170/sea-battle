import React from 'react';
import { Field } from '@/components/atoms/Field';
import { Box, Typography } from '@mui/material';
import { CellStatusEnum } from '@/types/enums';
import { Store } from 'effector';
import { ShipsSelect } from '@/components/molecules/ShipsSelect';

export interface SpacingOfShipProps {
  player: string;
  $store: Store<CellStatusEnum[][]>;
}

export const SpacingOfShip = ({ player, $store }: SpacingOfShipProps) => {
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
