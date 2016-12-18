import React from 'react';

export default (props) => {
  return <button
            className='btn btn-lg btn-default'
            onClick={props.onNextStep}>Next Step</button>;
};
