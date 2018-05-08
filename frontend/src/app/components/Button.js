import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

Button.propTypes = {
  text: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
