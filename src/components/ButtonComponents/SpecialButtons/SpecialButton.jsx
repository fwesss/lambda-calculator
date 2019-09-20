import React from 'react';
import PropTypes from 'prop-types';

import '../Button.css';
import './SpecialButton.css';


const SpecialButton = ({ special }) => (
  <>
    {/* Display a button element rendering the data being passed down from the parent container on
    props */}
    <button className="Button SpecialButton" type="button">{special}</button>
  </>
);

SpecialButton.propTypes = {
  special: PropTypes.string.isRequired,
};

export default SpecialButton;
