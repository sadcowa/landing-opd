import React from 'react';
import './IconButton.css'; 

//кнопки с иконкой и ссылкой

const IconButton = ({ icon: Icon, text, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="icon-button">
            <Icon className="icon" />
            <span className="button-text">{text}</span>
        </a>
    );
};

export default IconButton;