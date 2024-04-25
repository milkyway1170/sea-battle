import React from 'react';
import { useStore } from 'effector-react';
import { $isFirstPlayer } from '@/models/is-first-player';
import { Box } from '@mui/material';
import { $actionLogs } from '@/models/action-logs';
import { ActionLogItem } from '@/components/atoms/ActionLogItem/insex';
import { getLastActionLogs } from '@/utils/get-last-action-logs';

export const ActionLogs = () => {
  const isFirstPlayer = useStore($isFirstPlayer);
  const { firstPlayerActionLogs, secondPlayerActionLogs } =
    useStore($actionLogs);

  const lastActionLogs = getLastActionLogs({
    actionLogs: isFirstPlayer ? firstPlayerActionLogs : secondPlayerActionLogs,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: '5rem 0 0 0',
        height: '100%',
        width: '15rem',
      }}
    >
      {lastActionLogs.map((item, index) => (
        <ActionLogItem actionLog={item} key={index} />
      ))}
    </Box>
  );
};
