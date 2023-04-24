import { DEFAULT_FIELDS } from '@/constants/mock-data';
import { CellStatusEnum, OrientationEnum, PlayersEnum } from '@/types/enums';
import {
  IFields,
  ISetShip,
  ITemporarySetShip,
} from '@/types/types';
import { createEvent, createStore } from 'effector';
import { setSelectedShip } from '../selected-ship';
import { setIsPlaced } from '../ships-list';

export const $fields = createStore<IFields>(DEFAULT_FIELDS);

export const temporarySetShip = createEvent<ITemporarySetShip>();
export const setShip = createEvent<ISetShip>();

const temporarySetShipFn = (state: IFields, data: ITemporarySetShip) => {
  const field =
    data.fieldName === PlayersEnum.firstPlayer
      ? state.firstPlayerField
      : state.secondPlayerField;
  const { position, length, orientation } = data;

  const newField = field.map((item) => {
    if (orientation === OrientationEnum.Horizontal) {
      if (
        item.position.y >= position.y &&
        item.position.y < position.y + length &&
        item.position.x === position.x &&
        item.isTemporary
      )
        return {
          ...item,
          cellStatus: CellStatusEnum.AliveShip,
          isTemporary: true,
        };
    } else {
      if (
        item.position.x >= position.x &&
        item.position.x < position.x + length &&
        item.position.y === position.y &&
        item.isTemporary
      )
        return {
          ...item,
          cellStatus: CellStatusEnum.AliveShip,
          isTemporary: true,
        };
    }
    if (item.isTemporary)
      return {
        ...item,
        cellStatus: CellStatusEnum.Empty,
        isTemporary: false,
      };
    return item;
  });
  return data.fieldName === PlayersEnum.firstPlayer
    ? { ...state, firstPlayerField: newField }
    : { ...state, secondPlayerField: newField };
};

const setShipFn = (state: IFields, data: ISetShip) => {
  setIsPlaced(data.fieldName);
  setSelectedShip(null);

  const field =
    data.fieldName === PlayersEnum.firstPlayer
      ? state.firstPlayerField.map((item) => {
          return { ...item, isTemporary: false };
        })
      : state.secondPlayerField.map((item) => {
          return { ...item, isTemporary: false };
        });

  return data.fieldName === PlayersEnum.firstPlayer
    ? { ...state, firstPlayerField: field }
    : { ...state, secondPlayerField: field };
};

$fields.on(temporarySetShip, (state, data) => temporarySetShipFn(state, data));
$fields.on(setShip, (state, data) => setShipFn(state, data));
