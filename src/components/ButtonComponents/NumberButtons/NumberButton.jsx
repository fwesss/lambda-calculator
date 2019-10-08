import React from 'react';
import PropTypes from 'prop-types';

import '../Button.css';
import './NumberButton.css';


const NumberButton = ({ numberState, setNumberState, number }) => (
  <>
    <button
      className="Button NumberButton"
      type="button"
      onClick={() => {
        setNumberState(numberState + number);
      }}
    >
      {number}
    </button>
  </>
);

NumberButton.propTypes = {
  numberState: PropTypes.string.isRequired,
  setNumberState: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
};

export default NumberButton;
