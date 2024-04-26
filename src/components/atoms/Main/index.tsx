import React, { PropsWithChildren } from 'react';
import { Container } from './styles';

export const Main = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};
