import React from 'react';
import './SecondaryButton.css'; 

//кнопки о нас\наставники\наши проекты в хедере и футере

const SecondaryButton = ({ text, targetId, className }) => {
    const handleScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={handleScroll} className={`secondary-button ${className}`}>
            {text}
        </button>
    );
};

export default SecondaryButton;