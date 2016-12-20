import React from 'react';

export default (props) => {
  return <button
            className='btn btn-lg btn-danger'
            onClick={props.onReset}>Reset</button>;
};
