import React from 'react';
import { EnemyField } from '@/components/molecules/EnemyField';
import { InitialField } from '@/components/molecules/InitialField';
import { $isFirstPlayer } from '@/models/is-first-player';
import { $playerNames } from '@/models/player-names';
import { Button, Typography } from '@mui/material';
import { useStore } from 'effector-react';
import { $canShoot } from '@/models/can-shoot';
import { ActionLogs } from '../ActionLogs';
import { Container, FieldContainer, FieldsContainer } from './style';

export interface GameFieldsProps {
  onClick: () => void;
}

export const GameFields = ({ onClick }: GameFieldsProps) => {
  const isFirstPlayer = useStore($isFirstPlayer);
  const { firstPlayer, secondPlayer } = useStore($playerNames);
  const canShoot = useStore($canShoot);

  return (
    <Container>
      <Typography variant="h5">
        {isFirstPlayer ? firstPlayer : secondPlayer}
      </Typography>
      <FieldsContainer>
        <FieldContainer>
          <Typography variant="h5">Ваше поле:</Typography>
          <InitialField />
        </FieldContainer>
        <FieldContainer>
          <Typography variant="h5">Поле противника :</Typography>
          <EnemyField />
        </FieldContainer>
        <ActionLogs />
      </FieldsContainer>
      <Button onClick={onClick} variant="contained" disabled={canShoot}>
        Следующий игрок
      </Button>
    </Container>
  );
};
