//Header.js
import React from 'react';
import './Header.css';
import LogoTUSUR from '../../assets/logo_TUSUR.svg';
import { FirstButton } from '../UI-kit/FirstButton/FirstButton'; 
import SecondaryButton from '../UI-kit/SecondaryButton/SecondaryButton'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <LogoTUSUR width="210" height="94" /> 
            </div>
            <nav className="secondary">
                <SecondaryButton text="О курсе" targetId="section1" className="header-button"/>
                <SecondaryButton text="Наши проекты" targetId="section1" className="header-button"/>
                <SecondaryButton text="Наставники"targetId="leaders-section" className="header-button" />
            </nav>
            <FirstButton />
        </header>
    );
};

export default Header;