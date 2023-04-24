import React from 'react';
import { Box, Typography } from '@mui/material';
import { $selectedShip, setSelectedShip } from '@/models/selected-ship';
import { useStore } from 'effector-react';
import { Colors } from '@/constants/colors';
import { getBackgroundForSelectedShip } from '@/utils/get-background-for-selected-ship';
import { IShip } from '@/types/types';

export interface ShipItemProps extends IShip {}

export const ShipItem = ({
  name,
  length,
  isPlaced,
  orientation,
}: ShipItemProps) => {
  const selectedShip = useStore($selectedShip);
  const isCurrentSelectedShip = selectedShip?.name == name;

  const handleClick = () => {
    if (!isPlaced) setSelectedShip({ name, length, isPlaced, orientation });
  };

  return (
    <Box
      sx={{
        width: '10rem',
        fontSize: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        background: getBackgroundForSelectedShip(
          isCurrentSelectedShip,
          isPlaced,
        ),
        padding: '0.5rem',
        borderRadius: '0.5rem',
      }}
      onClick={handleClick}
    >
      <Typography variant="body1">{name}</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '-1px',
          marginLeft: '-1px',
        }}
      >
        {Array.from(Array(length)).map((index) => (
          <Box
            sx={{
              width: '1rem',
              height: '1rem',
              background: Colors.Denim,
              outline: ' 1px solid',
              marginTop: '1px',
              marginLeft: '1px',
            }}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
};
