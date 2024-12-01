import React, { useState } from 'react';
import './our-projects-block.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ArrowLeft from '../../assets/arrow_left.svg'; 
import ArrowRight from '../../assets/arrow_right.svg';
import Image1 from '../../assets/project1.png';
import Image2 from '../../assets/project2.png';
import Image3 from '../../assets/project3.png'; 
import EffectGridLeft from '../../assets/effect_left_grid.svg';
import EffectGridRight from '../../assets/effect_right_grid.svg';

const projectsData = [
    {
        id: 1,
        title: "Проект 1",
        description: "MINUX - софт для майнинга криптовалюты",
        image: Image1,
    },
    {
        id: 2,
        title: "Проект 2",
        description: "ReMind - домашний тренажер когнитивных и речевых способностей",
        image: Image2,
    },
    {
        id: 3,
        title: "Проект 3",
        description: "Хьюстон - HR-бот для подбора персонала",
        image: Image3,
    },
];

const OurProjects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
    };

    return (
        <div className="projects-section" id="projects">
            <p className="projects-title">
                <span className="white-text">Наши </span>
                <span className="green-text">проекты</span>
            </p>
            <p className="projects-description">
            В течение курса ОПД студенты воплощают свои инновационные идеи в реальность. Есть и проекты, которые<br/>
            становятся успешными. В этом разделе представлены несколько вдохновляющих примеров проектов,<br/>
            которые помогут вам понять, как реализовать свои идеи и превратить их в успешные проекты.<br/>
            </p>
            <div className="project-slider">
                <button className="arrow" onClick={prevProject}>
                    <img src={ArrowLeft} alt="Previous" />
                </button>
                <ProjectCard 
                    title={projectsData[currentIndex].title} 
                    description={projectsData[currentIndex].description} 
                    image={projectsData[currentIndex].image} 
                />
                <button className="arrow" onClick={nextProject}>
                    <img src={ArrowRight} alt="Next" />
                </button>
            </div>
            <img src={EffectGridLeft} className="effect-grid-left" alt="Эффект сетки" />
            <img src={EffectGridRight} className="effect-grid-right" alt="Эффект сетки" />
        </div>
    );
};

export default OurProjects;