import React from 'react';
import { Container } from './styles';
import { IEnemyFieldCell } from '@/types/types';
import { useStore } from 'effector-react';
import {
  checkIsShipDead,
  checkIsWin,
  getInitialCell,
  takeShotAtInitialField,
} from '@/models/initial-fileds';
import { $isFirstPlayer } from '@/models/is-first-player';
import { takeShotAtEnemyCell } from '@/models/enemy-fields';
import { ActionTypeEnum, CellStatusEnum } from '@/types/enums';
import { $canShoot, setCanShoot } from '@/models/can-shoot';
import { addActionLog } from '@/models/action-logs';
import Routes from '@/constants/routes';
import { useNavigate } from 'react-router-dom';

export interface EnemyFieldCellProps {
  fieldCell: IEnemyFieldCell;
}

export const EnemyFieldCell = ({ fieldCell }: EnemyFieldCellProps) => {
  const navigate = useNavigate();
  const { position, cellStatus, isShooted } = fieldCell;
  const isFirstPlayer = useStore($isFirstPlayer);
  const canShoot = useStore($canShoot);

  const handleClick = () => {
    if (!canShoot || fieldCell.isShooted ) return;

    takeShotAtInitialField({
      isFirstPlayer,
      position,
    });

    const shootedInitialCell = getInitialCell({
      isFirstPlayer,
      position,
    });

    const isShotHit =
      shootedInitialCell.cellStatus === CellStatusEnum.SlainShip;

    let actionType = ActionTypeEnum.Missed;

    if (isShotHit) {
      const isShipDead = checkIsShipDead({
        isFirstPlayer,
        shipName: shootedInitialCell.shipName,
        shipLength: shootedInitialCell.shipLength,
      });

      actionType = isShipDead ? ActionTypeEnum.Slained : ActionTypeEnum.Hurt;
    }

    takeShotAtEnemyCell({
      isFirstPlayer,
      position,
      isShotHit,
    });

    const shipLength =
      actionType === ActionTypeEnum.Slained
        ? shootedInitialCell.shipLength
        : null;

    addActionLog({
      actionType,
      isFirstPlayer,
      position,
      shipLength,
    });

    if (!isShotHit) setCanShoot(false);
    
    const isWin = checkIsWin(isFirstPlayer)

    if(isWin) navigate(Routes.WinPage)
  };

  return (
    <Container status={cellStatus} isShooted={isShooted} onClick={handleClick}>
      {isShooted ? <>&#x2022;</> : ''}
    </Container>
  );
};
