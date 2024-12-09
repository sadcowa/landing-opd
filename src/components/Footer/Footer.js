import React from 'react';
import './footer.css';

import IconButton from '../UI-kit/IconButton/IconButton'; 
import SecondaryButton from '../UI-kit/SecondaryButton/SecondaryButton';

import { ReactComponent as Logo } from '../../assets/logo_TUSUR.svg';
import { ReactComponent as Icon_VK } from '../../assets/icon_VK.svg'; 
import { ReactComponent as Icon_VK_Green } from '../../assets/icon_VK_hover.svg'; 
import { ReactComponent as Icon_CC } from '../../assets/icon_career.svg'; 
import { ReactComponent as Icon_CC_Green } from '../../assets/icon_career_hover.svg'; 
import { ReactComponent as Icon_SDO } from '../../assets/icon_SDO.svg'; 
import { ReactComponent as Icon_SDO_Green } from '../../assets/icon_SDO_hover.svg'; 

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="footer">
            <div className="footer-line" /> 
            <div className="footer-content">
                <div className="logo" onClick={scrollToTop}>
                    <Logo width={230} height={90}/>
                </div>
                <div className="vertical-line"/>
                <div className="scroll-buttons-container">
                    <SecondaryButton text="О курсе" targetId="section1" className="footer-button"/>
                    <SecondaryButton text="Наши проекты" targetId="projects" className="footer-button"/>
                    <SecondaryButton text="Наставники" targetId="leaders-section" className="footer-button"/>
                </div>
                <div className="vertical-line"/>
                <div className="link-buttons-container">
                    <IconButton 
                        icon={Icon_VK} 
                        iconHover={Icon_VK_Green} 
                        text="Курс ОПД ТУСУР" 
                        link="https://vk.com/opd_tusur" 
                    />
                    <IconButton 
                        icon={Icon_CC} 
                        iconHover={Icon_CC_Green} 
                        text="Центр карьеры ТУСУР" 
                        link="https://vk.com/centercareer_tusur" 
                    />
                    <IconButton 
                        icon={Icon_SDO} 
                        iconHover={Icon_SDO_Green} 
                        text="СДО ОПД" 
                        link="https://sdo.tusur.ru/course/view.php?id=17098" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;