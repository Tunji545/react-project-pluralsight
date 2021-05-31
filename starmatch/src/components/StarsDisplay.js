import React from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StarsDisplay = (props) => (
  <FontAwesomeIcon icon={faStar} className='star' />
);

export default StarsDisplay;
