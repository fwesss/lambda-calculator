import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';


const Display = ({ numberState }) => <div className="Display">{parseFloat(numberState)}</div>;

Display.propTypes = {
  numberState: PropTypes.string.isRequired,
};

export default Display;
