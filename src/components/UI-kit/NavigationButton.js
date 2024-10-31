import React from 'react';
import './NavigationButton.css'; 

export const NavigationButton = ({ text, href }) => { 
    return (
      <a href={href} className="navigation-button"> 
        {text}
      </a>
    );
};