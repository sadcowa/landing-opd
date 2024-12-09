import React from 'react';
import './text-area.css';

const Textarea = ({ id, value, onChange, style, disabled, placeholder, ...props }) => {
  return (
    <textarea
      id={id}
      className={`textarea ${disabled ? 'textarea-disabled' : ''}`}
      value={value}
      onChange={onChange}
      style={style}
      disabled={disabled}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Textarea;