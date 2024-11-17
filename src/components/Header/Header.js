//Header.js
import React from 'react';
import './header.css';
import {ReactComponent as LogoTUSUR} from '../../assets/logo_TUSUR.svg';
import {PrimaryButton } from '../UI-kit/PrimaryButton/PrimaryButton'; 
import SecondaryButton from '../UI-kit/SecondaryButton/SecondaryButton'; 

const Header = () => {
    const transferToFeedBack = () => {
        alert("перенеслись")
    }

    return (
        <div className="header">
            <div className="logo-container">
                <LogoTUSUR width="210" height="94" /> 
            </div>
            <div className="secondary">
                <SecondaryButton text="О курсе" targetId="section1" className="header-button"/>
                <SecondaryButton text="Наши проекты" targetId="projects" className="header-button"/>
                <SecondaryButton text="Наставники"targetId="leaders-section" className="header-button" />
            </div>
            <PrimaryButton handlerClick={transferToFeedBack} text='Обратная связь' />
        </div>
    );
};

export default Header;