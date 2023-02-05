import { FieldCell } from '@/components/atoms/FieldCell';
import React from 'react';
import { FIELDS } from './mock-data';
import { Table } from './styles';

export const Field = () => {
  return (
    <Table>
      {FIELDS.map((feildRow) => (
        <tr>
          {feildRow.map((item) => (
            <FieldCell cellStatus={item} />
          ))}
        </tr>
      ))}
    </Table>
  );
};
