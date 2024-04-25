import { IGetLastActionLogs } from '@/types/types';

export const getLastActionLogs = ({ actionLogs }: IGetLastActionLogs) => {
  return actionLogs.slice(-10);
};
