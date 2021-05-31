import React from 'react';

const PlayNumber = (props) => (
  <button
    className='number'
    onClick={() => {
      console.log(props.numbers);
    }}
  >
    {props.numbers}
  </button>
);

export default PlayNumber;
