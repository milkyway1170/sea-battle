import { DEFAULT_ENEMY_FIELDS } from '@/constants/mock-data';
import { IEnemyFields, ITakeShotEnemyCell } from '@/types/types';
import { findAndShotEnemyCell } from '@/utils/find-and-shot-enemy-cell';
import { createEvent, createStore } from 'effector';

export const $enemyFields = createStore<IEnemyFields>(DEFAULT_ENEMY_FIELDS);

export const takeShotAtEnemyCell = createEvent<ITakeShotEnemyCell>();

const takeShotAtEnemyCellFn = (
  state: IEnemyFields,
  { position, isFirstPlayer, isShotHit }: ITakeShotEnemyCell,
) => {
  return isFirstPlayer
    ? {
        ...state,
        secondPlayerField: findAndShotEnemyCell(
          state.secondPlayerField,
          position,
          isShotHit,
        ),
      }
    : {
        ...state,
        firstPlayerField: findAndShotEnemyCell(
          state.firstPlayerField,
          position,
          isShotHit,
        ),
      };
};

$enemyFields.on(takeShotAtEnemyCell, (state, data) =>
  takeShotAtEnemyCellFn(state, data),
);
