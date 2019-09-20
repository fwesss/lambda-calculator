import React, { useState } from 'react';
import { numbers } from '../../../data';

import NumberButton from './NumberButton';


const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div className="Numbers">
      {numbers.map((number) => (
        <NumberButton key={number} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
