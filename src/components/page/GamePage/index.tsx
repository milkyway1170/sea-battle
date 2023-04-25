import React from 'react';
import { Field } from '@/components/atoms/Field';
import { Container } from './styles';
import { Header } from '@/components/atoms/Header';
import { Footer } from '@/components/atoms/Footer';

export const GamePage = () => {
  return (
    <Container>
      <Header />
      GAME
      {/* <Field $store={$firstPlayer} /> */}
      <Footer />
    </Container>
  );
};
