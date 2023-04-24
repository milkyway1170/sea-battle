import { CellStatusEnum, OrientationEnum, PlayersEnum } from '@/types/enums';

const generateDefaultField = () => {
  const field = [];
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++)
      field.push({
        cellStatus: CellStatusEnum.Empty,
        isTemporary: false,
        position: {
          x,
          y,
        },
        shipName: null,
      });
  }
  return field;
};

export const DEFAULT_FIELDS = {
  firstPlayerField: generateDefaultField(),
  secondPlayerField: generateDefaultField(),
  // currentField: PlayersEnum.firstPlayer,
};

export const DEFAULT_SHIP_LIST = [
  {
    name: 'Трехпалубник 1',
    length: 3,
    orientation: OrientationEnum.Horizontal,
    isPlaced: false,
  },
  {
    name: 'Трехпалубник 2',
    length: 3,
    orientation: OrientationEnum.Horizontal,
    isPlaced: false,
  },
  {
    name: 'Двухпалубник 1',
    length: 2,
    orientation: OrientationEnum.Horizontal,
    isPlaced: false,
  },
  {
    name: 'Двухпалубник 2',
    length: 2,
    orientation: OrientationEnum.Horizontal,
    isPlaced: false,
  },
  {
    name: 'Однопалубник 1',
    length: 1,
    orientation: OrientationEnum.Horizontal,
    isPlaced: false,
  },
  {
    name: 'Однопалубник 2',
    length: 1,
    orientation: OrientationEnum.Horizontal,
    isPlaced: false,
  },
];
