import React from 'react';

const style = {
  enabled: {
    background: 'black',
  },
  disabled: {
    background: 'grey',
  }
};

export default (props) => {
  return (
    <td style={props.data ? style.enabled : style.disabled}>
      {
        `${props.rowId}:${props.colId}`
      }
    </td>
  );
}
