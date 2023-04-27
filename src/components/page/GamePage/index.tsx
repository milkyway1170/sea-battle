import React, { useState } from 'react';
import { Container } from './styles';
import { Header } from '@/components/atoms/Header';
import { Footer } from '@/components/atoms/Footer';
import { Button, Typography } from '@mui/material';
import { useStore } from 'effector-react';
import { InitialField } from '@/components/atoms/InitialField';
import { $playerNames } from '@/models/player-names';
import { $isFirstPlayer, setIsFirstPlayer } from '@/models/is-first-player';

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
          <>
            <Typography variant="h5">
              Теперь мы можем начать бой. Вы ходите по очереди, между ходами
              ваши поля с кораблями будут спрятаны, чтобы вы могли меняться и не
              подглядывать .
            </Typography>
            <Button onClick={handleСloseIntro} variant="contained">
              Погнали
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5">
              Меняемся, теперь ходит{' '}
              {isFirstPlayer ? firstPlayer : secondPlayer}
            </Typography>
            <Button onClick={handleСloseIntro} variant="contained">
              Продолжим
            </Button>
          </>
        )
      ) : (
        <>
          <Typography variant="h5">Поля</Typography>
          <InitialField />
          <Button onClick={handleChangeIsHideFields} variant="contained">
            Следующий игрок
          </Button>
        </>
      )}
      <Footer />
    </Container>
  );
};
