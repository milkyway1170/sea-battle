import React from 'react';
import { Box } from '@mui/material';
import { ShipItem } from '@/components/atoms/ShipItem';
import { $shipsList } from '@/models/ships-list';
import { useList } from 'effector-react';

export const ShipsSelect = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      {useList($shipsList, ({ name, length, isPlaced, orientation }, index) => (
        <ShipItem
          key={index}
          name={name}
          length={length}
          isPlaced={isPlaced}
          orientation={orientation}
        />
      ))}
    </Box>
  );
};
