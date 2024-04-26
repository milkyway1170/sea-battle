import React, { useState } from 'react';
import { Container } from './styles';
import { Header } from '@/components/atoms/Header';
import { Footer } from '@/components/atoms/Footer';
import { SpacingOfShip } from '@/components/molecules/SpacingOfShip';
import { Button, Typography } from '@mui/material';
import { Main } from '@/components/atoms/Main';
import { $playerNames } from '@/models/player-names';
import { useStore } from 'effector-react';
import { useNavigate } from 'react-router-dom';
import Routes from '@/constants/routes';
import { $shipsList, resetShipsList } from '@/models/ships-list';
import { isAllShipsPlaced } from '@/utils/is-all-ships-placed';
import { $isFirstPlayer, setIsFirstPlayer } from '@/models/is-first-player';
import { removeBufferCells } from '@/models/initial-fileds';

export const InitialPage = () => {
  const navigate = useNavigate();
  const shipsList = useStore($shipsList);
  const { firstPlayer, secondPlayer } = useStore($playerNames);
  const isFirstPlayer = useStore($isFirstPlayer);
  const [showTools, setShowTools] = useState(false);

  const handleShowTools = (): void => {
    setShowTools(!showTools);
  };

  const handleSwitchPlayer = (): void => {
    resetShipsList();
    setShowTools(!showTools);
    if (isFirstPlayer) setIsFirstPlayer(false);
    else {
      setIsFirstPlayer(true);
      removeBufferCells();
      navigate(Routes.GamePage);
    }
  };

  return (
    <Container>
      <Header />
      <Main>
        {showTools ? (
          <>
            <SpacingOfShip />
            <Button
              onClick={handleSwitchPlayer}
              variant="contained"
              disabled={isAllShipsPlaced(shipsList)}
            >
              Готово
            </Button>
          </>
        ) : (
          <>
            <Typography
              sx={{
                width: '50rem',
                textAlign: 'center'
              }}
              variant="h5"
            >
              Игроку {isFirstPlayer ? firstPlayer : secondPlayer} необходимо
              расставить свои корабли. Второму игроку следует не подсматривать.
            </Typography>
            <Button onClick={handleShowTools} variant="contained">
              Приступить
            </Button>
          </>
        )}
      </Main>
      <Footer />
    </Container>
  );
};
