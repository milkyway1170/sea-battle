import { FieldCell } from '@/components/atoms/FieldCell';

import { Box, Typography } from '@mui/material';
import { useList, useStore } from 'effector-react';
import React from 'react';
import { Store } from 'effector';
import { CellStatusEnum } from '@/types/enums';
import { IFieldCell } from '@/types/types';

export interface FieldProps {
  $store: Store<IFieldCell[]>;
}

export const Field = ({ $store }: FieldProps) => {
  // const playerField = useStore($store);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 2rem)',
        }}
      >
        {useList($store, (item) => (
          <FieldCell
            cellStatus={item.cellStatus}
            key={item.position.x + ' ' + item.position.y}
            isSetStatus={item.cellStatus === CellStatusEnum.AliveShip}
            position={item.position}
          />
        ))}
      </Box>
    </Box>
  );
};
