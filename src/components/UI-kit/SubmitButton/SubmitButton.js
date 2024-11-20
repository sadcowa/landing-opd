import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({ type, onClick, children, ...props }) => {
  return (
    <button
      type={type}
      className="submit-button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;