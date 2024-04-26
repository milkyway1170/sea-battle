import { createEvent, createStore } from 'effector';

export const $canShoot = createStore<boolean>(true);

export const setCanShoot = createEvent<boolean>();

const setCanShootFn = (data: boolean) => {
  return data;
};

$canShoot.on(setCanShoot, (_, data) => setCanShootFn(data));