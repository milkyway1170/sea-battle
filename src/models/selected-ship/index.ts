import { ISelectedShip, IShip } from '@/types/types';
import { createEvent, createStore } from 'effector';

export const $selectedShip = createStore<ISelectedShip | null>(null);

export const setSelectedShip = createEvent<ISelectedShip>();

const update = (state: ISelectedShip | null, data: ISelectedShip) => {
  if (data.name == state?.name) return null;
  if (data.isPlaced) return state;
  return data;
};

$selectedShip.on(setSelectedShip, (state, data) => update(state, data));
