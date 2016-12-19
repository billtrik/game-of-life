import React from 'react';

export default React.createClass({
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  },

  render() {
    const { data, rowId, colId } = this.props;

    return (
      <td className={data ? 'alive' : 'dead'}>
        {
          `${rowId}:${colId}`
        }
      </td>
    );
  }
});
