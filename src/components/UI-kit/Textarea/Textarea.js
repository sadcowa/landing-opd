import React from 'react';
import './text-area.css';

const TextArea = ({ id, value, onChange, onFocus, onBlur, style, ...props }) => {
  return (
    <textarea
      id={id}
      className="textarea"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style}
      {...props}
    />
  );
};

export default TextArea;