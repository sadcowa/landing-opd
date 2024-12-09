import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({ type, onClick, children, disabled, ...props }) => {
  return (
    <button
      type={type}
      className={`submit-button ${disabled ? 'submit-button-disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;