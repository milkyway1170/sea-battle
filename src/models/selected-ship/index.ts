import { OrientationEnum } from '@/types/enums';
import { ISelectedShip, IShip } from '@/types/types';
import { createEvent, createStore } from 'effector';

export const $selectedShip = createStore<ISelectedShip | null>(null);

export const setSelectedShip = createEvent<ISelectedShip | null>();
export const changeOrientationOfSelectedShip =
  createEvent<ISelectedShip | void>();

const update = (state: ISelectedShip | null, data: ISelectedShip | null) => {
  if (!data || data.name == state?.name) return null;
  if (data.isPlaced) return state;
  return data;
};

const changeOrientation = (state: ISelectedShip | null) => {
  if (!state) return state;
  const orientation =
    state.orientation === OrientationEnum.Horizontal
      ? OrientationEnum.Vertical
      : OrientationEnum.Horizontal;
  return { ...state, orientation };
};

$selectedShip.on(setSelectedShip, (state, data) => update(state, data));

$selectedShip.on(changeOrientationOfSelectedShip, (state) =>
  changeOrientation(state),
);
