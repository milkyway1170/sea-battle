import { InitialFieldCell } from '@/components/atoms/InitialFieldCell';
import { Box } from '@mui/material';
import React from 'react';
import { IInitialFieldCell } from '@/types/types';

export interface InitialFieldProps {
  field: IInitialFieldCell[];
  fieldName: string;
}

export const InitialField = ({
  field,
  fieldName,
}: InitialFieldProps) => {
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
        {field.map((fieldCell) => (
          <InitialFieldCell
            fieldCell={fieldCell}
            fieldName={fieldName}
            key={fieldCell.position.x + ' ' + fieldCell.position.y}
          />
        ))}
      </Box>
    </Box>
  );
};
