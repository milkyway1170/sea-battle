import { Colors } from '@/constants/colors';
import { CellStatusEnum } from '@/types/enums';
import styled from '@emotion/styled';

export const Container = styled.div<{ status: CellStatusEnum }>`
  width: 2rem;
  height: 2rem;
  border: 1px solid black;
  background-color: ${(props) => {
    if (props.status === CellStatusEnum.AliveShip) return Colors.Denim;
    if (props.status === CellStatusEnum.SlainShip) return Colors.Thunderbird;
    if (props.status === CellStatusEnum.Empty) return Colors.White;
    if (props.status === CellStatusEnum.Buffer) return Colors.BlizzardBlue;
  }};
`;
