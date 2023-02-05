import { CellStatusEnum } from '@/types/enums';
import React, { useState } from 'react';
import { TableCell } from './styles';

export interface FieldCellProps {
  cellStatus: CellStatusEnum;
}

export const FieldCell = ({ cellStatus }: FieldCellProps) => {
  const [status, setStatus] = useState<CellStatusEnum>(cellStatus);

  const handleClick = () => setStatus(CellStatusEnum.SlainShip);

  return <TableCell status={status} onClick={handleClick} />;
};
