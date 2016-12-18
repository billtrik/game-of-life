import React from 'react';
import TableCell from './table-cell';

export default (props) => {
  const { data, rowId } = props;

  return (
    <tr>
      {
        data.map((cell, index) => <TableCell key={index} rowId={rowId} colId={index} data={cell} />)
      }
    </tr>
  );
};
