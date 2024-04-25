import React from 'react';
import { ShipItem } from '@/components/atoms/ShipItem';
import { $shipsList } from '@/models/ships-list';
import { useList } from 'effector-react';
import { Container } from './style';

export const ShipsList = () => {
  return (
    <Container>
      {useList($shipsList, ({ name, length, isPlaced, orientation }, index) => (
        <ShipItem
          key={index}
          name={name}
          length={length}
          isPlaced={isPlaced}
          orientation={orientation}
        />
      ))}
    </Container>
  );
};
