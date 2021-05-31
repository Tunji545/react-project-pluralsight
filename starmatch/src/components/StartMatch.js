import React, { useState } from 'react';
import { utils } from './utils.js';
import StarsDisplay from './StarsDisplay';
import PlayNumber from './PlayNumber';

const StarMatch = () => {
  const [stars, setState] = useState(utils.random(1, 9));
  return (
    <div className='game'>
      <div className='help'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          {utils.range(1, stars).map((star) => (
            <StarsDisplay key={star} />
          ))}
        </div>
        <div className='right'>
          {utils.range(1, 9).map((number) => (
            <PlayNumber key={number} numbers={number} />
          ))}
        </div>
      </div>
      <div className='timer'>Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
