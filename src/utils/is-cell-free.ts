import { CellStatusEnum } from '@/types/enums';

export const isCellFree = (
  cellStatus: CellStatusEnum,
  isTemporary: boolean,
): boolean => {
  return (
    !(cellStatus === CellStatusEnum.AliveShip && !isTemporary) &&
    !(cellStatus === CellStatusEnum.Buffer && !isTemporary)
  );
};
