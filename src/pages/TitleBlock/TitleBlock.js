import React from 'react';
import { ReactComponent as ImageOPD } from '../../assets/image_title_block.svg'; 
import './title-block.css';
import EffectGrid from '../../assets/effect_left_grid.svg';

const Opd = () => {
    return (
        <div className="title" id="title-section">
            <div className="content">
                <ImageOPD width="1150" height="1050"/>
            </div>
            <img src={EffectGrid} className="grid-effect" alt="сетка"/>
        </div>
    );
};

export default Opd;