import React from 'react';
import { Typography } from '@mui/material';
import { $selectedShip, setSelectedShip } from '@/models/selected-ship';
import { useStore } from 'effector-react';
import { IShip } from '@/types/types';
import { Container, Ship, ShipContainer } from './style';

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
    <Container
      isCurrentSelectedShip={isCurrentSelectedShip}
      isPlaced={isPlaced}
      onClick={handleClick}
    >
      <Typography variant="body1">{name}</Typography>
      <ShipContainer>
        {Array.from(Array(length)).map((index) => (
          <Ship key={index} />
        ))}
      </ShipContainer>
    </Container>
  );
};
