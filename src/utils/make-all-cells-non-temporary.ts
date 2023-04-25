import { IFieldCell } from '@/types/types';

export const makeAllCellsNonTemporary = (field: IFieldCell[]): IFieldCell[] => {
  return field.map((cell) => {
    return { ...cell, isTemporary: false };
  });
};
