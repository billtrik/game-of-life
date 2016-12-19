import React from 'react';

const style = {
  enabled: {
    background: 'black',
  },
  disabled: {
    background: 'grey',
  }
};

export default React.createClass({
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data === nextProps.data;
  },

  render() {
    const { data, rowId, colId } = this.props;

    return (
      <td style={data ? style.enabled : style.disabled}>
        {
          `${rowId}:${colId}`
        }
      </td>
    );
  }
});
