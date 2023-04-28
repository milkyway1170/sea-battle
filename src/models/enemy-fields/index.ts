import { DEFAULT_ENEMY_FIELDS } from '@/constants/mock-data';
import { IEnemyFields } from '@/types/types';
import { createStore } from 'effector';

export const $enemyFields = createStore<IEnemyFields>(DEFAULT_ENEMY_FIELDS);
