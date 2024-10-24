//ui-kit.js
import React from 'react';
import './styles.css'; 

export const FeedbackButton = () => {
    return (
        <button className="feedback-button">
            Обратная связь
        </button>
    );
};

export const HeaderButton = ({ text, href }) => { 
    return (
      <a href={href} className="header-button"> 
        {text}
      </a>
    );
};
