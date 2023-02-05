import { CellStatusEnum } from '@/types/enums';
import styled from '@emotion/styled';

import { TableCell as MuiTableCell } from '@mui/material';

export const TableCell = styled.td<{ status: CellStatusEnum }>`
  width: 2rem;
  height: 2rem;
  border: 1px solid black;
  background-color: ${(props) => {
    if (props.status === CellStatusEnum.AliveShip) return 'green';
    if (props.status === CellStatusEnum.SlainShip) return 'red';
    if (props.status === CellStatusEnum.Empty) return 'white';
  }};
`;
