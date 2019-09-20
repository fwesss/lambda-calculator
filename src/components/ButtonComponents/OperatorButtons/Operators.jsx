import React, { useState } from 'react';
import { operators } from '../../../data';

import OperatorButton from './OperatorButton';


const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);

  return (
    <>
      {operators.map((operator) => (
        <OperatorButton key={operator.value} operator={operator} />
      ))}
    </>
  );
};

export default Operators;
