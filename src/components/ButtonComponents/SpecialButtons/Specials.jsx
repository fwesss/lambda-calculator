import React from 'react';
import PropTypes from 'prop-types';
import { specials } from '../../../data';

import SpecialButton from './SpecialButton';


const Specials = ({ setNumberState, numberState }) => (
  <div className="Specials">
    {specials.map((special) => (
      <SpecialButton
        key={special}
        setNumberState={setNumberState}
        numberState={numberState}
        special={special}
      />
    ))}
  </div>
);

Specials.propTypes = {
  setNumberState: PropTypes.func.isRequired,
  numberState: PropTypes.string.isRequired,
};

export default Specials;
