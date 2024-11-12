import React from 'react';
import './Footer.css';

import IconButton from '../UI-kit/IconButton/IconButton'; 
import SecondaryButton from '../UI-kit/SecondaryButton/SecondaryButton';

import { ReactComponent as Logo } from '../../assets/logo_TUSUR.svg';
import { ReactComponent as Icon_VK } from '../../assets/icon_VK.svg'; 
import { ReactComponent as Icon_CC } from '../../assets/icon_careerCenter.svg'; 
import { ReactComponent as Icon_SDO } from '../../assets/icon_SDO.svg'; 

const Footer = () => {
    return (
        <footer className="footer">
            <hr className="footer-line" /> 
            <div className="footer-content">
                <a href="#top" className="logo">
                    <Logo width={230} height={90}/>
                </a>
                <div className="vertical-line"></div>
                <div className="scroll-buttons-container">
                    <SecondaryButton text="О курсе" targetId="section1"className="footer-button"/>
                    <SecondaryButton text="Наши проекты" targetId="section2" className="footer-button"/>
                    <SecondaryButton text="Наставники" targetId="leaders-section" className="footer-button"/>
                </div>
                <div className="vertical-line"></div>
                <div className="link-buttons-container">
                    <IconButton 
                        icon={Icon_VK} 
                        text="Курс ОПД ТУСУР" 
                        link="https://vk.com/opd_tusur" 
                    />
                    <IconButton 
                        icon={Icon_CC} 
                        text="Центр карьеры ТУСУР" 
                        link="https://vk.com/centercareer_tusur" 
                    />
                    <IconButton 
                        icon={Icon_SDO} 
                        text="СДО ОПД" 
                        link="https://sdo.tusur.ru/course/view.php?id=17098" 
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;