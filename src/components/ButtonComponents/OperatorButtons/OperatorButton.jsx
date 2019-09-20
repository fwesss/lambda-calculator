import React from 'react';
import PropTypes from 'prop-types';

const OperatorButton = ({ operator }) => (
  <>
    {/* Display a button element rendering the data being passed down from the parent container on
    props */}
    <button type="button">{operator.char}</button>
  </>
);

OperatorButton.propTypes = {
  operator: PropTypes.shape().isRequired,
};

export default OperatorButton;
