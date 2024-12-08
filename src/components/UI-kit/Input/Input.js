import React from 'react';
import './Input.css';

const Input = ({ id, value, onChange, style, disabled, placeholder, ...props }) => {
  return (
    <input
      id={id}
      className={`input ${disabled ? 'input-disabled' : ''}`}
      value={value}
      onChange={onChange}
      style={style}
      disabled={disabled}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;