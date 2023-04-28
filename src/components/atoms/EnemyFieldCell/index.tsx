import { OrientationEnum } from '@/types/enums';
import React from 'react';
import { Container } from './styles';
import { IEnemyFieldCell } from '@/types/types';
import {
  $selectedShip,
  changeOrientationOfSelectedShip,
} from '@/models/selected-ship';
import { useStore } from 'effector-react';
import { setShip, temporarySetShip } from '@/models/initial-fileds';
import { $isFirstPlayer } from '@/models/is-first-player';

export interface EnemyFieldCellProps {
  fieldCell: IEnemyFieldCell;
}

export const EnemyFieldCell = ({ fieldCell }: EnemyFieldCellProps) => {
  const isFirstPlayer = useStore($isFirstPlayer);

  const handleClick = () => {
    
  };

  return <Container status={fieldCell.cellStatus} onClick={handleClick} />;
};
