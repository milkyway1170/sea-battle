import { EnemyFieldCell } from '@/components/atoms/EnemyFieldCell';
import { Box } from '@mui/material';
import React from 'react';
import { useStore } from 'effector-react';
import { $isFirstPlayer } from '@/models/is-first-player';
import { $enemyFields } from '@/models/enemy-fields';

export const EnemyField = () => {
  const isFirstPlayer = useStore($isFirstPlayer);
  const { firstPlayerField, secondPlayerField } = useStore($enemyFields);

  const field = isFirstPlayer ? secondPlayerField : firstPlayerField;

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
          <EnemyFieldCell
            fieldCell={fieldCell}
            key={fieldCell.position.x + ' ' + fieldCell.position.y}
          />
        ))}
      </Box>
    </Box>
  );
};
