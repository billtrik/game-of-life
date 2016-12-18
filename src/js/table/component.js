import React from 'react';
import TableRow from './table-row';

export default (props) => {
  const { data } = props;

  return (
    <table>
      <tbody>
        {
          data.map((row, index) => <TableRow key={index} rowId={index} data={row} />)
        }
      </tbody>
    </table>
  );
};
