import React from 'react';
import PropTypes from 'prop-types';


const SpecialButton = ({ special }) => (
  <>
    {/* Display a button element rendering the data being passed down from the parent container on
    props */}
    <button type="button">{special}</button>
  </>
);

SpecialButton.propTypes = {
  special: PropTypes.string.isRequired,
};

export default SpecialButton;
