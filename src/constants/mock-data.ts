import { CellStatusEnum, OrientationEnum } from '@/types/enums';

const generateDefaultInitialField = () => {
  const field = [];
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++)
      field.push({
        cellStatus: CellStatusEnum.Empty,
        isTemporary: false,
        isShooted: false,
        position: {
          x,
          y,
        },
        shipName: null,
        shipLength: null,
      });
  }
  return field;
};

const generateDefaultGameField = () => {
  const field = [];
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++)
      field.push({
        cellStatus: CellStatusEnum.Empty,
        isShooted: false,
        position: {
          x,
          y,
        },
      });
  }
  return field;
};

export const DEFAULT_INITIAL_FIELDS = {
  firstPlayerField: generateDefaultInitialField(),
  secondPlayerField: generateDefaultInitialField(),
};

export const DEFAULT_ENEMY_FIELDS = {
  firstPlayerField: generateDefaultGameField(),
  secondPlayerField: generateDefaultGameField(),
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
