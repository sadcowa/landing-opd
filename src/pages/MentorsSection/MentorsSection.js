import React from 'react';
import './MentorsSection.css'; 

import Manux from '../../assets/Manux.png';
import Sibagro from '../../assets/Sibagro.png';
import RKKEnergy from '../../assets/RKKEnergy.png';
import Gazprom from '../../assets/Gazprom.png';
import Mikran from '../../assets/Mikran.png';
import SSKStar from '../../assets/SSKStar.png';
import NPCPolus from '../../assets/NPCPolus.png';
import IRZ from '../../assets/IRZ.png';

const MentorsSection = () => {
  return (
    <div className="mentors-section">
      <h1>
        <span className="green-text">Внешние</span> <span className="white-text">наставники</span>
      </h1>
      <div className="mentors-list">
        <div className="mentor-row">
          <img src={Manux} alt="Наставник 1" className="mentor-image" />
          <img src={Sibagro} alt="Наставник 2" className="mentor-image" />
          <img src={RKKEnergy} alt="Наставник 3" className="mentor-image" />
          <img src={Gazprom} alt="Наставник 4" className="mentor-image" />
        </div>
        <div className="mentor-row">
          <img src={Mikran} alt="Наставник 5" className="mentor-image" />
          <img src={IRZ} alt="Наставник 6" className="mentor-image" />
          <img src={NPCPolus} alt="Наставник 7" className="mentor-image" />
          <img src={SSKStar} alt="Наставник 8" className="mentor-image" />
        </div>
      </div>
    </div>
  );
};

export default MentorsSection;