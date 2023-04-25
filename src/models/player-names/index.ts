import { IPlayerNames } from '@/types/types';
import { createEvent, createStore } from 'effector';

export const $playerNames = createStore<IPlayerNames>({
  firstPlayer: 'Игрок 1',
  secondPlayer: 'Игрок 2',
});

export const update = createEvent<IPlayerNames>();

const updateStore = (data: IPlayerNames) => {
  return data;
};

$playerNames.on(update, (_, data) => updateStore(data));
