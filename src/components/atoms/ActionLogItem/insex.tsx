import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { IActionLog } from '@/types/types';

export interface ActionLogItemProps {
  actionLog: IActionLog;
}

export const ActionLogItem = ({ actionLog }: ActionLogItemProps) => {
  return (
    <Box>
      <Typography variant="body1">{actionLog.text}</Typography>
    </Box>
  );
};
