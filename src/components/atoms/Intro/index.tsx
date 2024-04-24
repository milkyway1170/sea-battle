import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export interface IntroProps {
  onClick: () => void;
}

export const Intro = ({ onClick }: IntroProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5">
        Теперь мы можем начать бой. Вы ходите по очереди, между ходами ваши поля
        с кораблями будут спрятаны, чтобы вы могли меняться и не подглядывать.
      </Typography>
      <Button onClick={onClick} variant="contained">
        Погнали
      </Button>
    </Box>
  );
};
