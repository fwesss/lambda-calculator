import React from 'react';
import PropTypes from 'prop-types';

import '../Button.css';
import './SpecialButton.css';


const SpecialButton = ({
  percentageState,
  setPercentageState, special, numberState, setNumberState,
}) => (
  <>
    <button
      className="Button SpecialButton"
      type="button"
      onClick={() => {
        if (special === 'C') {
          setNumberState('0');
          setPercentageState(false);
        } else if (special === '%') {
          if (percentageState === false) {
            setNumberState((parseFloat(numberState) / 100).toString());
            setPercentageState(true);
          }
        } else {
          setNumberState((parseFloat(numberState) * -1).toString());
        }
      }}
    >
      {special}
    </button>
  </>
);

SpecialButton.propTypes = {
  setPercentageState: PropTypes.func.isRequired,
  percentageState: PropTypes.bool.isRequired,
  setNumberState: PropTypes.func.isRequired,
  numberState: PropTypes.string.isRequired,
  special: PropTypes.string.isRequired,
};

export default SpecialButton;
