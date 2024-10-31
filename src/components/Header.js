// Header.js
import React from 'react';
import './Header.css'; // Импортируем стили для хедера
import { ReactComponent as LogoTUSUR } from '../assets/logo_TUSUR.svg'; // Импортируйте ваш логотип
import { NavigationButton } from './UI-kit/NavigationButton'; // Импортируем компонент кнопки
import { FeedbackButton } from './UI-kit/FeedbackButton'; // Импортируем кнопку обратной связи

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <LogoTUSUR width="210" height="94" /> 
            </div>
            <nav className="navigation">
                <NavigationButton text="О курсе" />
                <NavigationButton text="Наши проекты" />
                <NavigationButton text="Наставники" />
            </nav>
            <FeedbackButton />
        </header>
    );
};

export default Header;