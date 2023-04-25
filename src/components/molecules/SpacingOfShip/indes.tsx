import React from 'react';
import { Field } from '@/components/atoms/Field';
import { Box, Typography } from '@mui/material';
import { ShipsList } from '@/components/molecules/ShipsList';
import { useStore } from 'effector-react';
import { $playerNames } from '@/models/player-names';
import { $fields } from '@/models/fileds';
import { PlayersEnum } from '@/types/enums';

export interface SpacingOfShipProps {
  player: string;
}

export const SpacingOfShip = ({ player }: SpacingOfShipProps) => {
  const { firstPlayer } = useStore($playerNames);
  const { firstPlayerField, secondPlayerField } = useStore($fields);
  console.log(firstPlayerField);
  return (
    <>
      <Typography variant="h5">Растановка {player}:</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <ShipsList />
        <Field
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
