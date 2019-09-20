import React from 'react';
import PropTypes from 'prop-types';

import { numbers } from '../../../data';

import NumberButton from './NumberButton';


const Numbers = ({ numberState, setNumberState }) => (
  <div className="Numbers">
    {numbers.map((number) => (
      <NumberButton
        numberState={numberState}
        setNumberState={setNumberState}
        key={number}
        number={number}
      />
    ))}
  </div>
);

Numbers.propTypes = {
  numberState: PropTypes.string.isRequired,
  setNumberState: PropTypes.func.isRequired,
};

export default Numbers;
