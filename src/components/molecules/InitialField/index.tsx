import { InitialFieldCell } from '@/components/atoms/InitialFieldCell';
import { Box } from '@mui/material';
import React from 'react';
import { $initialFields } from '@/models/initial-fileds';
import { useStore } from 'effector-react';
import { $isFirstPlayer } from '@/models/is-first-player';
import { Container } from './style';

export const InitialField = () => {
  const isFirstPlayer = useStore($isFirstPlayer);
  const { firstPlayerField, secondPlayerField } = useStore($initialFields);

  const field = isFirstPlayer ? firstPlayerField : secondPlayerField;

  return (
    <Container>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 2rem)',
        }}
      >
        {field.map((fieldCell) => (
          <InitialFieldCell
            fieldCell={fieldCell}
            key={fieldCell.position.x + ' ' + fieldCell.position.y}
          />
        ))}
      </Box>
    </Container>
  );
};
