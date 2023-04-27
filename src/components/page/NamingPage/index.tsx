import React from 'react';
import { Container, Form } from './styles';
import { Header } from '@/components/atoms/Header';
import { Footer } from '@/components/atoms/Footer';
import { Button, Typography } from '@mui/material';
import { Main } from '@/components/atoms/Main';
import { setPlayerNames } from '@/models/player-names';
import { useNavigate } from 'react-router-dom';
import Routes from '@/constants/routes';
import FormField from '@/components/atoms/FormField';
import useFormFieldsControl from '@/hooks/useFormFieldsControl';
import { formOptions } from '@/utils/validation';
import { IPlayerNames } from '@/types/types';
import { setIsFirstPlayer } from '@/models/is-first-player';

export interface INamingPageForm {
  firstPlayer: string;
  secondPlayer: string;
}

export const NamingPage = () => {
  const navigate = useNavigate();

  const { handleSubmit, controlFields } = useFormFieldsControl<INamingPageForm>(
    ['firstPlayer', 'secondPlayer'],
    formOptions,
  );

  const handleOpenNextPage = (data: IPlayerNames): void => {
    setPlayerNames(data);
    setIsFirstPlayer(true);
    navigate(Routes.InitialPage);
  };

  return (
    <Container>
      <Header />
      <Main>
        <Typography variant="h5">
          Прежде чем начать игру, стоит указать имена каждого из игроков:
        </Typography>
        <Form onSubmit={handleSubmit(handleOpenNextPage)}>
          <FormField
            defaultValue={''}
            label="Первый игрок"
            name="firstPlayer"
            {...controlFields.firstPlayer}
          />
          <FormField
            defaultValue={''}
            label="Второй игрок"
            name="secondPlayer"
            {...controlFields.secondPlayer}
          />
          <Button type="submit" variant="contained" sx={{ width: '25rem' }}>
            Далее
          </Button>
        </Form>
      </Main>
      <Footer />
    </Container>
  );
};
