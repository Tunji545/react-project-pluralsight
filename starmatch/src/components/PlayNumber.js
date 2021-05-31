import React from 'react';
import { colors } from './colors.js';

const PlayNumber = (props) => (
  <button
    className='number'
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => {
      console.log(props.numbers);
    }}
  >
    {props.numbers}
  </button>
);

export default PlayNumber;
