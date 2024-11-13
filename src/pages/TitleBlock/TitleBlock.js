import React from 'react';
import { ReactComponent as ImageOPD } from '../../assets/image_OPD.svg'; 
import './title-block.css';


const Opd = () => {
    return (
        <div className="title" id="title-section">
            <div className="content">
                <div className="text-container">
                    <p>
                        <span className="text-white">Основы</span><br />
                        <span className="text-green">проектной</span><br />
                        <span className="text-white">деятельности</span>
                    </p>
                </div>
                <ImageOPD width="400" height="400" />
            </div>
        </div>
    );
};

export default Opd;