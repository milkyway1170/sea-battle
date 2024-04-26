import { IInitialFieldCell } from '@/types/types';

export const makeAllCellsNonTemporary = (
  field: IInitialFieldCell[],
): IInitialFieldCell[] => {
  return field.map((cell) => {
    return { ...cell, isTemporary: false };
  });
};
