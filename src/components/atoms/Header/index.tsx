import React from 'react';
import { Container, Title } from './styles';
import { useNavigate } from 'react-router-dom';
import Routes from '@/constants/routes';

export const Header = () => {
  const navigate = useNavigate();
  
  const handleClick = (): void => navigate(Routes.HomePage);

  return (
    <Container>
      <Title variant="h4" onClick={handleClick}>Морской бой</Title>
    </Container>
  );
};
