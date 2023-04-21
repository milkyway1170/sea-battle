import { IShip } from '@/types/types';
import { createEvent, createStore } from 'effector';
import { DEFAULT_SHIP_LIST } from './default-values';

export const $shipsList = createStore<IShip[]>(DEFAULT_SHIP_LIST);

// export const updateShipList = createEvent<IShip>();

// const update = (state: IShip | null, data: IShip) => {
//   if (data.name == state?.name) return null;
//   return data;
// };

// $shipsList.on(updateShipList, (state, data) => update(state, data));
