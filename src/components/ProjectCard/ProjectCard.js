import React from 'react';

const ProjectCard = ({ title, description, image }) => {
    return (
        <div className="project-card">
            <p className="project-description">{description}</p>
            <img src={image} alt={title} className="project-image" />
        </div>
    );
};

export default ProjectCard;