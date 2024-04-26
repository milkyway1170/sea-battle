import React, { useState } from 'react';
import { Container } from './styles';
import { Header } from '@/components/atoms/Header';
import { Footer } from '@/components/atoms/Footer';
import { $isFirstPlayer, setIsFirstPlayer } from '@/models/is-first-player';
import { RotationPlayer } from '@/components/atoms/RotationPlayer';
import { Intro } from '@/components/atoms/Intro';
import { GameFields } from '@/components/molecules/GameFields';
import { useStore } from 'effector-react';
import { setCanShoot } from '@/models/can-shoot';

export const GamePage = () => {
  const isFirstPlayer = useStore($isFirstPlayer);

  const [isShowIntro, setIsShowIntro] = useState(true);
  const [isHideFields, setIsHideFields] = useState(true);

  const handleСloseIntro = (): void => {
    setIsShowIntro(false);
    setIsHideFields(false);
  };

  const handleMakeRotation = (): void => {
    setIsShowIntro(false);
    setIsHideFields(false);
    setCanShoot(true);
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
          <Intro onClick={handleСloseIntro} />
        ) : (
          <RotationPlayer onClick={handleMakeRotation} />
        )
      ) : (
        <GameFields onClick={handleChangeIsHideFields} />
      )}
      <Footer />
    </Container>
  );
};
