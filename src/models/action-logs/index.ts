import {
  IActionLogs,
  IAddActionLog,
  IGetLastActionLogs,
  IPlayerNames,
} from '@/types/types';
import { buildActionLogText } from '@/utils/build-action-log-text';
import { createEvent, createStore } from 'effector';

export const $actionLogs = createStore<IActionLogs>({
  firstPlayerActionLogs: [],
  secondPlayerActionLogs: [],
});

export const addActionLog = createEvent<IAddActionLog>();

const addActionLogFn = (
  state: IActionLogs,
  { isFirstPlayer, actionType, position, shipLength }: IAddActionLog,
) => {
  const newActionLog = {
    actionType,
    position,
    text: buildActionLogText(actionType, shipLength),
  };

  return isFirstPlayer
    ? {
        ...state,
        firstPlayerActionLogs: state.firstPlayerActionLogs.concat([
          newActionLog,
        ]),
      }
    : {
        ...state,
        secondPlayerActionLogs: state.secondPlayerActionLogs.concat([
          newActionLog,
        ]),
      };
};

$actionLogs.on(addActionLog, (state, data) => addActionLogFn(state, data));


