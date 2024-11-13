import React from 'react';
import './primary-button.css'; 

//кнопки обратная связь и отправить

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