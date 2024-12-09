import React from 'react';
import './primary-button.css'; 

export const PrimaryButton = ({ handlerClick, text }) => {
    const handleScroll = () => {
        const element = document.getElementById('feedback-section');
        if (element) {
            const headerOffset = 50;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' 
            });
        }
    };

    return (
        <button onClick={handleScroll} className="primary-button">
            {text}
        </button>
    );
};