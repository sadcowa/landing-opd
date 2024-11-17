import React from 'react';
import './primary-button.css'; 

export const PrimaryButton = ({handlerClick, text}) => {
    return (
        <button onClick={handlerClick} className="primary-button">
            {text}
        </button>
    );
};
