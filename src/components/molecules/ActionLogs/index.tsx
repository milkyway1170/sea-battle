import React from 'react';
import { useStore } from 'effector-react';
import { $isFirstPlayer } from '@/models/is-first-player';
import { $actionLogs } from '@/models/action-logs';
import { ActionLogItem } from '@/components/atoms/ActionLogItem/insex';
import { getLastActionLogs } from '@/utils/get-last-action-logs';
import { Container } from './style';

export const ActionLogs = () => {
  const isFirstPlayer = useStore($isFirstPlayer);
  const { firstPlayerActionLogs, secondPlayerActionLogs } =
    useStore($actionLogs);

  const lastActionLogs = getLastActionLogs({
    actionLogs: isFirstPlayer ? firstPlayerActionLogs : secondPlayerActionLogs,
  });

  return (
    <Container>
      {lastActionLogs.map((item, index) => (
        <ActionLogItem actionLog={item} key={index} />
      ))}
    </Container>
  );
};
