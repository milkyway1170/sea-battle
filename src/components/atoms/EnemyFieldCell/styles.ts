import { Colors } from '@/constants/colors';
import { CellStatusEnum } from '@/types/enums';
import styled from '@emotion/styled';

export const Container = styled.div<{
  status: CellStatusEnum;
  isShooted: boolean;
}>`
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: ${(props) => {
    if (props.status === CellStatusEnum.AliveShip) return Colors.Denim;
    if (props.status === CellStatusEnum.SlainShip) return Colors.Thunderbird;
    if (props.status === CellStatusEnum.Empty) return Colors.White;
    if (props.status === CellStatusEnum.Buffer) return Colors.BlizzardBlue;
  }};
`;
