import { Colors } from '@/constants/colors';

export const getBackgroundForSelectedShip = (
  isCurrentSelectedShip: boolean,
  isPlaced: boolean,
) => {
  if (isPlaced) return Colors.PastelGreen;
  return isCurrentSelectedShip ? Colors.CuriousBlue : Colors.Sail;
};
