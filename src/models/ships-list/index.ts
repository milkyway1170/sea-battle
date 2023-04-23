import { DEFAULT_SHIP_LIST } from '@/constants/mock-data';
import { IShip } from '@/types/types';
import { createEvent, createStore } from 'effector';

export const $shipsList = createStore<IShip[]>(DEFAULT_SHIP_LIST);

export const setIsPlaced = createEvent<string>();

const update = (state: IShip[], name: string) => {
  //   if (data.name == state?.name) return null;
  return state.map((ship) =>
    ship.name === name ? { ...ship, isPlaced: true } : ship,
  );
};

$shipsList.on(setIsPlaced, (state, name) => update(state, name));
