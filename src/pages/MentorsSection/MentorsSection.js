import React from 'react';
import './MentorsSection.css'; 

import Manux from '../../assets/logo_manux.png';
import Sibagro from '../../assets/logo_sibagro.png';
import RKKEnergy from '../../assets/logo_RKKEnergy.png';
import Gazprom from '../../assets/logo_gazprom.png';
import Mikran from '../../assets/logo_mikran.png';
import SSKStar from '../../assets/logo_SSKStar.png';
import NPCPolus from '../../assets/logo_NPCPolus.png';
import IRZ from '../../assets/logo_IRZ.png';
import EffectGrid from '../../assets/effect_right_grid.svg';

const MentorsSection = () => {
  return (
    <div className="mentors-section">
      <h1>
        <span className="text-white">Внешние</span> <span className="text-green">наставники</span>
      </h1>
      <div className="mentors-list">
        <div className="mentor-row">
          <img src={Sibagro} alt="Наставник 1" className="mentor-image" />
          <img src={SSKStar} alt="Наставник 2" className="mentor-image" />
          <img src={Mikran} alt="Наставник 3" className="mentor-image" />
          <img src={RKKEnergy} alt="Наставник 4" className="mentor-image" />
        </div>
        <div className="mentor-row">
          <img src={NPCPolus} alt="Наставник 5" className="mentor-image" />
          <img src={Manux} alt="Наставник 6" className="mentor-image" />
          <img src={Gazprom} alt="Наставник 7" className="mentor-image" />
          <img src={IRZ} alt="Наставник 8" className="mentor-image" />
        </div>
      </div>
      <img src={EffectGrid} className="effect-grid" alt="Эффект сетки" />
    </div>
    
  );
};

export default MentorsSection;