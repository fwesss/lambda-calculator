import React from 'react';
import { operators } from '../../../data';

import OperatorButton from './OperatorButton';


const Operators = () => {


  return (
    <>
      {operators.map((operator) => (
        <OperatorButton key={operator.value} operator={operator} />
      ))}
    </>
  );
};

export default Operators;
