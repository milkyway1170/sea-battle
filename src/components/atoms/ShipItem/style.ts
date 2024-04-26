import { Colors } from '@/constants/colors';
import { getBackgroundForSelectedShip } from '@/utils/get-background-for-selected-ship';
import styled from '@emotion/styled';

export const Container = styled.div<{
  isCurrentSelectedShip: boolean;
  isPlaced: boolean;
}>`
  width: 10rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: ${(props) => {
    return getBackgroundForSelectedShip(
      props.isCurrentSelectedShip,
      props.isPlaced,
    );
  }};
`;

export const ShipContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: -1px 0 0 -1px;
`;

export const Ship = styled.div`
  width: 1rem;
  height: 1rem;
  background: ${Colors.Denim};
  outline: 1px solid;
  margin: 1px 0 0 1px;
`;
