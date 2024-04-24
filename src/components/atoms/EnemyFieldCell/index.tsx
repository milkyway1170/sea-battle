import React from 'react';
import { Container } from './styles';
import { IEnemyFieldCell } from '@/types/types';
import { useStore } from 'effector-react';
import {
  getInitialCell,
  takeShotAtInitialField,
} from '@/models/initial-fileds';
import { $isFirstPlayer } from '@/models/is-first-player';
import { takeShotAtEnemyCell } from '@/models/enemy-fields';
import { CellStatusEnum } from '@/types/enums';
import { $canShoot, setCanShoot } from '@/models/can-shoot';

export interface EnemyFieldCellProps {
  fieldCell: IEnemyFieldCell;
}

export const EnemyFieldCell = ({ fieldCell }: EnemyFieldCellProps) => {
  const { position, cellStatus, isShooted } = fieldCell;
  const isFirstPlayer = useStore($isFirstPlayer);
  const canShoot = useStore($canShoot)

  const handleClick = () => {
    if(!canShoot) return

    takeShotAtInitialField({
      isFirstPlayer,
      position,
    });

    const updatedInitialCell = getInitialCell({
      isFirstPlayer,
      position,
    });

    const isShotHit = updatedInitialCell.cellStatus === CellStatusEnum.SlainShip

    takeShotAtEnemyCell({
      isFirstPlayer,
      position,
      isShotHit,
    });

    if(!isShotHit) setCanShoot(false)
  };

  return (
    <Container status={cellStatus} isShooted={isShooted} onClick={handleClick}>
      {isShooted ? <>&#x2022;</> : ''} 
    </Container>
  );
};
