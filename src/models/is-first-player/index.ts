import { createEvent, createStore } from 'effector';

export const $isFirstPlayer = createStore<boolean>(true);

export const setIsFirstPlayer = createEvent<boolean>();

const setIsFirstPlayerFn = (data: boolean) => {
  return data;
};

$isFirstPlayer.on(setIsFirstPlayer, (_, data) => setIsFirstPlayerFn(data));
