//Header.js
import React from 'react';
import './info-text.css';


// type = right, left
const InfoText = ({type, title, text, Image}) => {
    return (
        <div className={`container ${type}`}>
            <div className='text-info'>
                <div className=''>{title}</div>
                <div className=''>{text}</div>
            </div>
            <Image />
        </div>
    );
};

export default InfoText;