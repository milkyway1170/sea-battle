import { OrientationEnum } from '@/types/enums';
import React from 'react';
import { Container } from './styles';
import { IInitialFieldCell } from '@/types/types';
import {
  $selectedShip,
  changeOrientationOfSelectedShip,
} from '@/models/selected-ship';
import { useStore } from 'effector-react';
import { setShip, temporarySetShip } from '@/models/initial-fileds';
import { $isFirstPlayer } from '@/models/is-first-player';

export interface InitialFieldCellProps {
  fieldCell: IInitialFieldCell;
}

export const InitialFieldCell = ({ fieldCell }: InitialFieldCellProps) => {
  const isFirstPlayer = useStore($isFirstPlayer);
  const selectedShip = useStore($selectedShip);

  const handleClick = () => {
    if (selectedShip) {
      setShip({ shipName: selectedShip.name, isFirstPlayer });
    }
  };

  const handlePick = () => {
    if (selectedShip) {
      temporarySetShip({
        ...fieldCell,
        ...selectedShip,
        isFirstPlayer,
        shipName: selectedShip.name,
      });
    }
  };

  const handleChangeOrientation = (event: React.MouseEvent) => {
    event.preventDefault();
    changeOrientationOfSelectedShip();
    if (selectedShip)
      temporarySetShip({
        ...fieldCell,
        ...selectedShip,
        isFirstPlayer,
        shipName: selectedShip.name,
        orientation:
          selectedShip.orientation === OrientationEnum.Horizontal
            ? OrientationEnum.Vertical
            : OrientationEnum.Horizontal,
      });
  };

  return (
    <Container
      status={fieldCell.cellStatus}
      onClick={handleClick}
      onMouseOver={handlePick}
      onContextMenu={handleChangeOrientation}
    />
  );
};
