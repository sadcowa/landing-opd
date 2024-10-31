import React from 'react';
import { ReactComponent as Logo } from '../assets/logo_TUSUR.svg';
import LinkButton from '../components/UI-kit/LinkButton'; 
import ScrollButton from '../components/UI-kit/ScrollButton'; 
import './Footer.css';
import { ReactComponent as Icon1 } from '../assets/icon_VK.svg'; 
import { ReactComponent as Icon2 } from '../assets/icon_careerCenter.svg'; 
import { ReactComponent as Icon3 } from '../assets/icon_SDO.svg'; 

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
                    <ScrollButton text="О курсе" targetId="section1" />
                    <ScrollButton text="Наши проекты" targetId="section2" />
                    <ScrollButton text="Наставники" targetId="section3" />
                </div>

                <div className="vertical-line"></div>

                {/* Контейнер для ссылок */}
                <div className="link-buttons-container">
                    <LinkButton 
                        icon={Icon1} 
                        text="Курс опд ТУСУР" 
                        link="https://vk.com/opd_tusur" 
                    />
                    <LinkButton 
                        icon={Icon2} 
                        text="Центр карьеры ТУСУР" 
                        link="https://vk.com/centercareer_tusur" 
                    />
                    <LinkButton 
                        icon={Icon3} 
                        text="СДО ОПД" 
                        link="https://sdo.tusur.ru/course/view.php?id=17098" 
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;