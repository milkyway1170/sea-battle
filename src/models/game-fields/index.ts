import { DEFAULT_GAME_FIELDS } from '@/constants/mock-data';
import { IGameFields } from '@/types/types';
import { createStore } from 'effector';

export const $gameFields = createStore<IGameFields>(DEFAULT_GAME_FIELDS);
