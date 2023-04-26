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

export interface InitialFieldCellProps {
  fieldCell: IInitialFieldCell;
  fieldName: string;
}

export const InitialFieldCell = ({
  fieldCell,
  fieldName,
}: InitialFieldCellProps) => {
  const selectedShip = useStore($selectedShip);

  const handleClick = () => {
    if (selectedShip) {
      setShip({ shipName: selectedShip.name, fieldName });
    }
  };

  const handlePick = () => {
    if (selectedShip) {
      temporarySetShip({
        ...fieldCell,
        ...selectedShip,
        fieldName,
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
        fieldName,
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
