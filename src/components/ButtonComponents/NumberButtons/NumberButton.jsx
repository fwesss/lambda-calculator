import React from 'react';
import PropTypes from 'prop-types';

const NumberButton = ({ number }) => (
  <>
    {/* Display a button element rendering the data being passed down from the parent container on
    props */}
    <button type="button">{number}</button>
  </>
);

NumberButton.propTypes = {
  number: PropTypes.string.isRequired,
};

export default NumberButton;
