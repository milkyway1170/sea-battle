import { OrientationEnum } from '@/types/enums';
import React from 'react';
import { Container } from './styles';
import { IEnemyFieldCell } from '@/types/types';
import {
  $selectedShip,
  changeOrientationOfSelectedShip,
} from '@/models/selected-ship';
import { useStore } from 'effector-react';
import { takeShotAtInitialField } from '@/models/initial-fileds';
import { $isFirstPlayer } from '@/models/is-first-player';

export interface EnemyFieldCellProps {
  fieldCell: IEnemyFieldCell;
}

export const EnemyFieldCell = ({ fieldCell }: EnemyFieldCellProps) => {
  const isFirstPlayer = useStore($isFirstPlayer);

  const handleClick = () => {
    const result = takeShotAtInitialField({
      isFirstPlayer,
      position: fieldCell.position,
    });
    console.log(result);
    // takeShotAtInitialField({})
  };

  return <Container status={fieldCell.cellStatus} onClick={handleClick} />;
};
