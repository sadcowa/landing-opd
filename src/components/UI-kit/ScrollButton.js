import React from 'react';
import './ScrollButton.css'; 
//import ScrollButton from './components/UI-kit/ScrollButton';
//<ScrollButton text="" targetId="*name*-section" />
const ScrollButton = ({ text, targetId }) => {
    const handleScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={handleScroll} className="scroll-button">
            {text}
        </button>
    );
};

export default ScrollButton;