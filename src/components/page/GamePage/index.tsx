import React, { useState } from 'react';
import { Container } from './styles';
import { Header } from '@/components/atoms/Header';
import { Footer } from '@/components/atoms/Footer';
import { Box, Button, Typography } from '@mui/material';
import { useStore } from 'effector-react';
import { InitialField } from '@/components/atoms/InitialField';
import { $playerNames } from '@/models/player-names';
import { $isFirstPlayer, setIsFirstPlayer } from '@/models/is-first-player';
import { EnemyField } from '@/components/atoms/EnemyField';

export const GamePage = () => {
  const isFirstPlayer = useStore($isFirstPlayer);
  const { firstPlayer, secondPlayer } = useStore($playerNames);
  const [isShowIntro, setIsShowIntro] = useState(true);
  const [isHideFields, setIsHideFields] = useState(true);

  const handleСloseIntro = (): void => {
    setIsShowIntro(false);
    setIsHideFields(false);
  };

  const handleChangeIsHideFields = (): void => {
    setIsHideFields(!isShowIntro);
    setIsFirstPlayer(!isFirstPlayer);
  };

  return (
    <Container>
      <Header />
      {isHideFields ? (
        isShowIntro ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5">
              Теперь мы можем начать бой. Вы ходите по очереди, между ходами
              ваши поля с кораблями будут спрятаны, чтобы вы могли меняться и не
              подглядывать.
            </Typography>
            <Button onClick={handleСloseIntro} variant="contained">
              Погнали
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5">
              Меняемся, теперь ходит{' '}
              {isFirstPlayer ? firstPlayer : secondPlayer}
            </Typography>
            <Button onClick={handleСloseIntro} variant="contained">
              Продолжим
            </Button>
          </Box>
        )
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">
            {isFirstPlayer ? firstPlayer : secondPlayer}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2rem',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5">Ваше поле:</Typography>
              <InitialField />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5">Поле противника :</Typography>
              <EnemyField />
            </Box>
          </Box>
          <Button onClick={handleChangeIsHideFields} variant="contained">
            Следующий игрок
          </Button>
        </Box>
      )}
      <Footer />
    </Container>
  );
};
