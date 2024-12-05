import React from 'react';
import './secondary-button.css'; 

const SecondaryButton = ({ text, targetId, className }) => {
    const handleScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' 
            });
        }
    };

    return (
        <button onClick={handleScroll} className={`secondary-button ${className}`}>
            {text}
        </button>
    );
};

export default SecondaryButton;