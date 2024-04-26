import { IPlayerNames } from '@/types/types';
import { createEvent, createStore } from 'effector';

export const $playerNames = createStore<IPlayerNames>({
  firstPlayer: 'Игрок 1',
  secondPlayer: 'Игрок 2',
});

export const setPlayerNames = createEvent<IPlayerNames>();

const setPlayerNamesFn = (data: IPlayerNames) => {
  return data;
};

$playerNames.on(setPlayerNames, (_, data) => setPlayerNamesFn(data));
