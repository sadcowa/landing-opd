import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, videoUrl }) => {
    return (
        <div className="project-card">
            <div className="project-text">
                <p>{description}</p>
            </div>
            <iframe 
                src={videoUrl} 
                width="950" 
                height="550" 
                allow="autoplay; encrypted-media; picture-in-picture" 
                title={title}
                style={{ border: 'none' }} 
            ></iframe>
        </div>
    );
};

export default ProjectCard;