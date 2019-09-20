import React from 'react';
import PropTypes from 'prop-types';

import '../Button.css';
import './OperatorButton.css';


const OperatorButton = ({ operator }) => (
  <>
    <button className="Button OperatorButton" type="button">{operator.char}</button>
  </>
);

OperatorButton.propTypes = {
  operator: PropTypes.shape().isRequired,
};

export default OperatorButton;
