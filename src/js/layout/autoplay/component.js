import React from 'react';

export default (props) => {
  const text = props.autoplay ? 'Stop' : 'Play';

  return <button
            className='btn btn-lg btn-default'
            onClick={props.onToggleAutoplay}>{
              text
            }</button>;
};
