import { CellStatusEnum } from '@/types/enums';
import { IInitialFieldCell } from '@/types/types';

export const makeAllBufferCellsEmpty = (
  field: IInitialFieldCell[],
): IInitialFieldCell[] => {
  return field.map((cell) => {
    return cell.cellStatus === CellStatusEnum.Buffer ?  {...cell, cellStatus: CellStatusEnum.Empty} : cell
  });
};