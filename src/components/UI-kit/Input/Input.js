import React from 'react';
import './Input.css';

const Input = ({ id, value, onChange, onFocus, onBlur, style, ...props }) => {
  return (
    <input
      id={id}
      className="input"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style}
      {...props}
    />
  );
};

export default Input;