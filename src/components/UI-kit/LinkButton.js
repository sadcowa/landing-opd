import React from 'react';
import './LinkButton.css'; 

/*<LinkButton 
                icon={Icon1} 
                text="Курс опд ТУСУР" 
                link="https://example.com/1" 
            />
            <LinkButton 
                icon={Icon2} 
                text="Центр карьеры ТУСУР" 
                link="https://example.com/2" 
            />
import LinkButton from './components/UI-kit/LinkButton'; // Путь к вашему компоненту кнопки
import { ReactComponent as Icon1 } from './assets/icon_VK.svg'; // Импорт первой иконки
import { ReactComponent as Icon2 } from './assets/icon_SDO.svg'; // Импорт второй иконки/**/ 
const LinkButton = ({ icon: Icon, text, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="icon-button">
            <Icon className="icon" />
            <span className="button-text">{text}</span>
        </a>
    );
};

export default LinkButton;