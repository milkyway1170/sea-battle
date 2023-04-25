import { DEFAULT_FIELDS } from '@/constants/mock-data';
import { CellStatusEnum, OrientationEnum, PlayersEnum } from '@/types/enums';
import { IFields, ISetShip, ITemporarySetShip } from '@/types/types';
import { createEvent, createStore } from 'effector';
import { setSelectedShip } from '../selected-ship';
import { setIsPlaced } from '../ships-list';
import { makeAllCellsNonTemporary } from '@/utils/make-all-cells-non-temporary';
import { isCellFree } from '@/utils/is-cell-free';

export const $fields = createStore<IFields>(DEFAULT_FIELDS);

export const temporarySetShip = createEvent<ITemporarySetShip>();
export const setShip = createEvent<ISetShip>();

const temporarySetShipFn = (state: IFields, data: ITemporarySetShip) => {
  const { position, length, orientation, shipName, fieldName } = data;

  if (orientation === OrientationEnum.Horizontal) {
    if (position.y + length > 6) return state;
  } else {
    if (position.x + length > 6) return state;
  }

  const field =
    fieldName === PlayersEnum.firstPlayer
      ? state.firstPlayerField
      : state.secondPlayerField;

  let isInvalidPosition = false;

  const newField = field.map((item) => {
    if (orientation === OrientationEnum.Horizontal) {
      if (
        item.position.y >= position.y &&
        item.position.y < position.y + length &&
        item.position.x === position.x
      ) {
        if (!isCellFree(item.cellStatus, item.isTemporary)) {
          isInvalidPosition = true;
          return item;
        }
        return {
          ...item,
          shipName,
          cellStatus: CellStatusEnum.AliveShip,
          isTemporary: true,
        };
      }
      if (
        Math.abs(item.position.x - position.x) <= 1 &&
        position.y - 1 <= item.position.y &&
        item.position.y < position.y + length + 1
      ) {
        if (!isCellFree(item.cellStatus, item.isTemporary)) {
          return item;
        }
        return {
          ...item,
          cellStatus: CellStatusEnum.Buffer,
          isTemporary: true,
        };
      }
    } else {
      if (
        item.position.x >= position.x &&
        item.position.x < position.x + length &&
        item.position.y === position.y
      ) {
        if (!isCellFree(item.cellStatus, item.isTemporary)) {
          isInvalidPosition = true;
          return item;
        }
        return {
          ...item,
          shipName,
          cellStatus: CellStatusEnum.AliveShip,
          isTemporary: true,
        };
      }
      if (
        Math.abs(item.position.y - position.y) <= 1 &&
        position.x - 1 <= item.position.x &&
        item.position.x < position.x + length + 1
      ) {
        if (!isCellFree(item.cellStatus, item.isTemporary)) {
          return item;
        }
        return {
          ...item,
          cellStatus: CellStatusEnum.Buffer,
          isTemporary: true,
        };
      }
    }
    if (item.isTemporary)
      return {
        ...item,
        cellStatus: CellStatusEnum.Empty,
        isTemporary: false,
      };
    return item;
  });

  if (isInvalidPosition) return state;

  return data.fieldName === PlayersEnum.firstPlayer
    ? { ...state, firstPlayerField: newField }
    : { ...state, secondPlayerField: newField };
};

const setShipFn = (state: IFields, data: ISetShip) => {
  const { firstPlayerField, secondPlayerField } = state;

  setIsPlaced(data.shipName);
  setSelectedShip(null);

  return data.fieldName === PlayersEnum.firstPlayer
    ? { ...state, firstPlayerField: makeAllCellsNonTemporary(firstPlayerField) }
    : {
        ...state,
        secondPlayerField: makeAllCellsNonTemporary(secondPlayerField),
      };
};

$fields.on(temporarySetShip, (state, data) => temporarySetShipFn(state, data));
$fields.on(setShip, (state, data) => setShipFn(state, data));
