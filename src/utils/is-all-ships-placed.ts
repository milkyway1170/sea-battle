import { IShip } from '@/types/types';

export const isAllShipsPlaced = (list: IShip[]): boolean => {
  let isAllShipsPlaced = true;
  list.filter((item) => {
    if (item.isPlaced) return (isAllShipsPlaced = false);
  });
  return isAllShipsPlaced;
};
