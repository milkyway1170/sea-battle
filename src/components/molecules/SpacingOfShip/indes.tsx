import React from 'react';
import { InitialField } from '@/components/atoms/InitialField';
import { Box, Typography } from '@mui/material';
import { ShipsList } from '@/components/molecules/ShipsList';
import { useStore } from 'effector-react';
import { $playerNames } from '@/models/player-names';
import { $initialFields } from '@/models/initial-fileds';
import { PlayersEnum } from '@/types/enums';

export interface SpacingOfShipProps {
  player: string;
}

export const SpacingOfShip = ({ player }: SpacingOfShipProps) => {
  const { firstPlayer } = useStore($playerNames);
  const { firstPlayerField, secondPlayerField } = useStore($initialFields);

  return (
    <>
      <Typography variant="h5">Растановка {player}:</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <ShipsList />
        <InitialField
          fieldName={
            player === firstPlayer
              ? PlayersEnum.firstPlayer
              : PlayersEnum.secondPlayer
          }
          field={player === firstPlayer ? firstPlayerField : secondPlayerField}
        />
      </Box>
    </>
  );
};
