import { DEFAULT_INITIAL_FIELDS } from '@/constants/mock-data';
import { CellStatusEnum, OrientationEnum, PlayersEnum } from '@/types/enums';
import {
  ICheckIsShipDead,
  IInitialFields,
  ISetShip,
  ITakeShot,
  ITemporarySetShip,
} from '@/types/types';
import { createEvent, createStore } from 'effector';
import { setSelectedShip } from '../selected-ship';
import { setIsPlaced } from '../ships-list';
import { makeAllCellsNonTemporary } from '@/utils/make-all-cells-non-temporary';
import { isCellFree } from '@/utils/is-cell-free';
import { makeAllBufferCellsEmpty } from '@/utils/make-all-buffer-cells-empty';
import { findAndShotInitialCell } from '@/utils/find-and-shot-initial-cell';
import { findCellIndex } from '@/utils/find-cell-index';

export const $initialFields = createStore<IInitialFields>(
  DEFAULT_INITIAL_FIELDS,
);

export const temporarySetShip = createEvent<ITemporarySetShip>();
export const setShip = createEvent<ISetShip>();
export const removeBufferCells = createEvent();
export const takeShotAtInitialField = createEvent<ITakeShot>();

const temporarySetShipFn = (state: IInitialFields, data: ITemporarySetShip) => {
  const { position, length, orientation, shipName, isFirstPlayer } = data;

  if (orientation === OrientationEnum.Horizontal) {
    if (position.y + length > 6) return state;
  } else {
    if (position.x + length > 6) return state;
  }

  const field = isFirstPlayer
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
          shipLength: length,
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
          shipName: null,
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
          shipName: null,
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

  return data.isFirstPlayer
    ? { ...state, firstPlayerField: newField }
    : { ...state, secondPlayerField: newField };
};

const setShipFn = (state: IInitialFields, data: ISetShip) => {
  const { firstPlayerField, secondPlayerField } = state;

  setIsPlaced(data.shipName);
  setSelectedShip(null);

  return data.isFirstPlayer
    ? { ...state, firstPlayerField: makeAllCellsNonTemporary(firstPlayerField) }
    : {
        ...state,
        secondPlayerField: makeAllCellsNonTemporary(secondPlayerField),
      };
};

const removeBufferCellsFn = (state: IInitialFields) => {
  return {
    firstPlayerField: makeAllBufferCellsEmpty(state.firstPlayerField),
    secondPlayerField: makeAllBufferCellsEmpty(state.secondPlayerField),
  };
};

const takeShotAtInitialFieldFn = (
  state: IInitialFields,
  { isFirstPlayer, position }: ITakeShot,
) => {
  if (isFirstPlayer) {
    return {
      ...state,
      secondPlayerField: findAndShotInitialCell(
        state.secondPlayerField,
        position,
      ),
    };
  } else {
    return {
      ...state,
      firstPlayerField: findAndShotInitialCell(
        state.firstPlayerField,
        position,
      ),
    };
  }
};

$initialFields.on(temporarySetShip, (state, data) =>
  temporarySetShipFn(state, data),
);
$initialFields.on(setShip, (state, data) => setShipFn(state, data));
$initialFields.on(removeBufferCells, (state) => removeBufferCellsFn(state));
$initialFields.on(takeShotAtInitialField, (state, data) => {
  takeShotAtInitialFieldFn(state, data);
});

export const getInitialCell = ({ position, isFirstPlayer }: ITakeShot) => {
  const { firstPlayerField, secondPlayerField } = $initialFields.getState();

  const field = isFirstPlayer ? secondPlayerField : firstPlayerField;

  const searchedCellIndex = findCellIndex(field, position);

  if (searchedCellIndex === -1) throw new Error(`Enemy cell wasn't found`);

  return field[searchedCellIndex];
};

export const checkIsShipDead = ({
  isFirstPlayer,
  shipName,
  shipLength,
}: ICheckIsShipDead) => {
  if (shipLength == null || shipName == null)
    throw new Error(`Incorrect data of ship`);

  const { firstPlayerField, secondPlayerField } = $initialFields.getState();

  const field = isFirstPlayer ? secondPlayerField : firstPlayerField;

  const slainedCells = field.filter(
    (cell) =>
      cell.shipName === shipName &&
      cell.cellStatus === CellStatusEnum.SlainShip,
  );

  return slainedCells.length === shipLength;
};

export const checkIsWin = (isFirstPlayer: boolean) => {
  const { firstPlayerField, secondPlayerField } = $initialFields.getState();

  const field = isFirstPlayer ? secondPlayerField : firstPlayerField;

  const slainedCells = field.filter(
    (cell) =>
      cell.cellStatus === CellStatusEnum.SlainShip,
  );

  return slainedCells.length === 12
};
