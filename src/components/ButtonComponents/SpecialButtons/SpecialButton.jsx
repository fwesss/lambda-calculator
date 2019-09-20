import React from 'react';
import PropTypes from 'prop-types';

import '../Button.css';
import './SpecialButton.css';


const SpecialButton = ({ special }) => (
  <>
    <button className="Button SpecialButton" type="button">{special}</button>
  </>
);

SpecialButton.propTypes = {
  special: PropTypes.string.isRequired,
};

export default SpecialButton;
