import React from 'react';
import './FirstButton.css'; 

//кнопка обратная связь

export const FirstButton = ({handlerClick, text}) => {
    return (
        <button onClick={handlerClick} className="first-button">
            {text}
        </button>
    );
};

export const Input = ({handlerChange, placeholder}) => {
    return (
        <input 
            placeholder={placeholder} 
            onChange={(e) => handlerChange(e.target.value)} 
            className="first-button" 
        />
    );
};