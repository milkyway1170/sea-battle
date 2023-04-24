import { FieldCell } from '@/components/atoms/FieldCell';

import { Box, Typography } from '@mui/material';
import { useList, useStore } from 'effector-react';
import React from 'react';
import { Store } from 'effector';
import { CellStatusEnum } from '@/types/enums';
import { IFieldCell } from '@/types/types';

export interface FieldProps {
  field: IFieldCell[];
  fieldName: string;
}

export const Field = ({ field, fieldName }: FieldProps) => {
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
        {field.map((item) => (
          <FieldCell
            fieldName={fieldName}
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
