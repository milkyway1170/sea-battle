import { CellStatusEnum } from '@/types/enums';
import { ICoordinates, IInitialFieldCell } from '@/types/types';
import { findCellIndex } from './find-cell-index';

export const findAndShotInitialCell = (
  field: IInitialFieldCell[],
  position: ICoordinates,
): IInitialFieldCell[] => {
  const shotedCellIndex = findCellIndex(field, position);
  
  if (shotedCellIndex === -1) throw new Error(`Enemy cell wasn't found`);

  const shotedCell = field[shotedCellIndex];
  
  const isShotHit = shotedCell.cellStatus === CellStatusEnum.AliveShip;

  console.log('shotedCell:', shotedCell)

  const newShotedCell = isShotHit
    ? { ...shotedCell, isShooted: true, cellStatus: CellStatusEnum.SlainShip }
    : { ...shotedCell, isShooted: true };

  field[shotedCellIndex] = newShotedCell;

  return field;
};
