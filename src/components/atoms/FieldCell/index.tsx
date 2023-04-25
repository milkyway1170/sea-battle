import { CellStatusEnum, OrientationEnum } from '@/types/enums';
import React, { useState } from 'react';
import { Container } from './styles';
import { ICoordinates, IFieldCell } from '@/types/types';
import {
  $selectedShip,
  changeOrientationOfSelectedShip,
} from '@/models/selected-ship';
import { useStore } from 'effector-react';
import { setShip, temporarySetShip } from '@/models/fileds';

export interface FieldCellProps {
  cellStatus: CellStatusEnum;
  position: ICoordinates;
  fieldName: string;
}

export const FieldCell = ({
  cellStatus,
  position,
  fieldName,
}: FieldCellProps) => {
  const selectedShip = useStore($selectedShip);

  const handleClick = () => {
    if (selectedShip) {
      console.log('handleClick');
      setShip({ shipName: selectedShip.name, fieldName });
    }
  };

  const handlePick = () => {
    if (selectedShip)
      temporarySetShip({
        cellStatus,
        isPlaced: selectedShip.isPlaced,
        position,
        fieldName,
        orientation: selectedShip.orientation,
        length: selectedShip.length,
      });
  };

  // const handleCancelPick = () => {
  //   if (!isSetStatus) console.log('handleCancelPick');
  // };

  const handleChangeOrientation = (event: React.MouseEvent) => {
    event.preventDefault();
    changeOrientationOfSelectedShip();
    if (selectedShip)
      temporarySetShip({
        cellStatus,
        isPlaced: selectedShip.isPlaced,
        position,
        fieldName,
        orientation:
          selectedShip.orientation === OrientationEnum.Horizontal
            ? OrientationEnum.Vertical
            : OrientationEnum.Horizontal,
        length: selectedShip.length,
      });
  };

  return (
    <Container
      status={cellStatus}
      onClick={handleClick}
      onMouseOver={handlePick}
      onContextMenu={handleChangeOrientation}
    />
  );
};
