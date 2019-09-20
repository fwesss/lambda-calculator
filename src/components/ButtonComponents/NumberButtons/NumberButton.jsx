import React from 'react';
import PropTypes from 'prop-types';

import '../Button.css';
import './NumberButton.css';


const NumberButton = ({ number }) => (
  <>
    {/* Display a button element rendering the data being passed down from the parent container on
    props */}
    <button className="Button NumberButton" type="button">{number}</button>
  </>
);

NumberButton.propTypes = {
  number: PropTypes.string.isRequired,
};

export default NumberButton;
