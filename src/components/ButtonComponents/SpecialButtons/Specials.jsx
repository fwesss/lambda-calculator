import React from 'react';
import PropTypes from 'prop-types';
import { specials } from '../../../data';

import SpecialButton from './SpecialButton';


const Specials = ({
  percentageState, setPercentageState, setNumberState, numberState,
}) => (
  <div className="Specials">
    {specials.map((special) => (
      <SpecialButton
        key={special}
        setNumberState={setNumberState}
        numberState={numberState}
        percentageState={percentageState}
        setPercentageState={setPercentageState}
        special={special}
      />
    ))}
  </div>
);

Specials.propTypes = {
  setPercentageState: PropTypes.func.isRequired,
  percentageState: PropTypes.bool.isRequired,
  setNumberState: PropTypes.func.isRequired,
  numberState: PropTypes.string.isRequired,
};

export default Specials;
