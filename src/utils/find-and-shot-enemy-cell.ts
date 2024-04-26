import { CellStatusEnum } from '@/types/enums';
import { ICoordinates, IEnemyFieldCell } from '@/types/types';
import { findCellIndex } from './find-cell-index';

export const findAndShotEnemyCell = (
  field: IEnemyFieldCell[],
  position: ICoordinates,
  isShotHit: boolean,
): IEnemyFieldCell[] => {
  const shotedCellIndex = findCellIndex(field, position);
  
  if (shotedCellIndex === -1) throw new Error(`Enemy cell wasn't found`);

  const shotedCell = field[shotedCellIndex];

  const newShotedCell = isShotHit
    ? { ...shotedCell, isShooted: true, cellStatus: CellStatusEnum.SlainShip }
    : { ...shotedCell, isShooted: true};

  field[shotedCellIndex] = newShotedCell;

  return field;
};
