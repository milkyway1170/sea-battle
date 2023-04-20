import React from 'react';
import { Box, Typography } from '@mui/material';
import { ShipItem } from '@/components/atoms/ShipItem';

export const ShipsSelect = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <ShipItem name={'Трехпалубник 1'} length={3} />
      <ShipItem name={'Трехпалубник 2'} length={3} />
      <ShipItem name={'Двухпалубник 1'} length={2} />
      <ShipItem name={'Двухпалубник 2'} length={2} />
      <ShipItem name={'Однопалубник 1'} length={1} />
      <ShipItem name={'Однопалубник 2'} length={1} />
    </Box>
  );
};
