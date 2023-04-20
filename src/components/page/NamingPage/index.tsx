import React from 'react';
import { Container, Form } from './styles';
import { Header } from '@/components/atoms/Header';
import { Footer } from '@/components/atoms/Footer';
import { SpacingOfShip } from '@/components/molecules/SpacingOfShip/indes';
import { Button, TextField, Typography } from '@mui/material';
import { Main } from '@/components/atoms/Main';
import { $playerNames, update } from '@/models/player-names';
import { useStore } from 'effector-react';
import { useNavigate } from 'react-router-dom';
import Routes from '@/constants/routes';
import { Controller } from 'react-hook-form';
import FormField from '@/components/atoms/FormField';
import useFormFieldsControl from '@/hooks/useFormFieldsControl';
import { formOptions } from '@/utils/validation';

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

  //   const { firstPlayer, secondPlayer } = useStore($playerNames);
  //   const [player, setPlayer] = useState(firstPlayer);
  //   const [showTools, setShowTools] = useState(false);

  const handleOpenNextPage = (data: any): void => {
    console.log(data);
    update(data);
    navigate(Routes.LocationPage);
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
