import { FieldCell } from '@/components/atoms/FieldCell';
import { $firstPlayer } from '@/models/first-player';
import { $secondPlayer } from '@/models/second-player';
import { Box, Typography } from '@mui/material';
import { useStore } from 'effector-react';
import React from 'react';
import { FIELDS } from '../../../constants/mock-data';
import { Table } from './styles';

export const Field = () => {
  const firstPlayer = useStore($firstPlayer);
  const secondPlayer = useStore($secondPlayer);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '25rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography>Первый игрок</Typography>
        <Table>
          {firstPlayer.map((feildRow) => (
            <tr>
              {feildRow.map((item) => (
                <FieldCell cellStatus={item} />
              ))}
            </tr>
          ))}
        </Table>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography>Второй игрок</Typography>
        <Table>
          {secondPlayer.map((feildRow) => (
            <tr>
              {feildRow.map((item) => (
                <FieldCell cellStatus={item} />
              ))}
            </tr>
          ))}
        </Table>
      </Box>
    </Box>
  );
};
