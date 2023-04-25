import { FieldCell } from '@/components/atoms/FieldCell';
import { Box } from '@mui/material';
import React from 'react';
import { IFieldCell } from '@/types/types';

export interface FieldProps {
  field: IFieldCell[];
  fieldName: string;
}

export const Field = ({ field, fieldName }: FieldProps) => {
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
          <FieldCell
            fieldCell={fieldCell}
            fieldName={fieldName}
            key={fieldCell.position.x + ' ' + fieldCell.position.y}
          />
        ))}
      </Box>
    </Box>
  );
};
