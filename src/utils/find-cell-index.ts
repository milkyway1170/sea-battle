import {
  ICoordinates,
  IEnemyFieldCell,
  IInitialFieldCell,
} from '@/types/types';

export const findCellIndex = (
  field: IInitialFieldCell[] | IEnemyFieldCell[],
  position: ICoordinates,
): number => {
  return field.findIndex(
    (cell) => cell.position.x === position.x && cell.position.y === position.y,
  );
};
