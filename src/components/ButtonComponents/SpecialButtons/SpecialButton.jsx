import React from 'react';
import PropTypes from 'prop-types';

import '../Button.css';
import './SpecialButton.css';


const SpecialButton = ({ special, numberState, setNumberState }) => (
  <>
    <button
      className="Button SpecialButton"
      type="button"
      onClick={() => {
        if (special === 'C') {
          setNumberState('');
        } else if (special === '%') {
          setNumberState((parseFloat(numberState) / 100).toString());
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
  setNumberState: PropTypes.func.isRequired,
  numberState: PropTypes.string.isRequired,
  special: PropTypes.string.isRequired,
};

export default SpecialButton;
