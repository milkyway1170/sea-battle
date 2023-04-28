import { CellStatusEnum } from '@/types/enums';
import { ICoordinates, IInitialFieldCell } from '@/types/types';

export const findAndShotCell = (
  field: IInitialFieldCell[],
  position: ICoordinates,
): IInitialFieldCell[] => {
  return field.map((cell) => {
    if (JSON.stringify(cell.position) === JSON.stringify(position))
      return cell.cellStatus === CellStatusEnum.AliveShip
        ? { ...cell, isShooted: true, cellStatus: CellStatusEnum.SlainShip }
        : { ...cell, isShooted: true };
    return cell;
  });
};
