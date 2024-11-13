import React from 'react';
import './leader-card.css';

const LeaderCard = ({ photo, name, position }) => {
    return (
        <div className="leader">
            <img src={photo} alt={name} className="leader-photo" />
            <p className="leader-name">{name}</p>
            <p className="leader-position">{position}</p>
        </div>
    );
};

export default LeaderCard;