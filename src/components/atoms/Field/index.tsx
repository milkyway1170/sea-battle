import { FieldCell } from '@/components/atoms/FieldCell';

import { Box, Typography } from '@mui/material';
import { useStore } from 'effector-react';
import React from 'react';

import { Table } from './styles';
import { Store } from 'effector';
import { CellStatusEnum } from '@/types/enums';

export interface FieldProps {
  $store: Store<CellStatusEnum[][]>;
}

export const Field = ({ $store }: FieldProps) => {
  const playerField = useStore($store);

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
      <Table>
        <tbody>
          {playerField.map((feildRow, xIndex) => (
            <tr key={xIndex}>
              {feildRow.map((item, yIndex) => (
                <FieldCell cellStatus={item} key={xIndex + ' ' + yIndex} />
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};
