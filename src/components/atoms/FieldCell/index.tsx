import { CellStatusEnum, OrientationEnum } from '@/types/enums';
import React, { useState } from 'react';
import { Container } from './styles';
import { ICoordinates, IFieldCell } from '@/types/types';
import {
  $selectedShip,
  changeOrientationOfSelectedShip,
} from '@/models/selected-ship';
import { useStore } from 'effector-react';
import { placingOfShip, setShip } from '@/models/first-player';
import { temporarySetShip } from '@/models/fileds';

export interface FieldCellProps {
  isSetStatus: boolean;
  cellStatus: CellStatusEnum;
  position: ICoordinates;
  fieldName: string;
}

export const FieldCell = ({
  cellStatus,
  isSetStatus,
  position,
  fieldName,
}: FieldCellProps) => {
  const selectedShip = useStore($selectedShip);

  const handleClick = () => {
    if (selectedShip) setShip(selectedShip.name);
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

  const handleCancelPick = () => {
    if (!isSetStatus) console.log('handleCancelPick');
  };

  const handleChangeOrientation = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log('before:', selectedShip);
    changeOrientationOfSelectedShip();
    console.log('after:', selectedShip);
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
      onMouseOut={handleCancelPick}
      onContextMenu={handleChangeOrientation}
    />
  );
};
