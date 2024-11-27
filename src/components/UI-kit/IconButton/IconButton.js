import React, { useState } from 'react';
import './icon-button.css'; 

const IconButton = ({ icon: Icon, iconHover: IconHover, text, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? <IconHover className="icon" /> : <Icon className="icon" />}
            <span className="button-text">{text}</span>
        </a>
    );
};

export default IconButton;