import React, { useState } from 'react';
import './our-projects-block.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ArrowLeft from '../../assets/arrow_left.svg'; 
import ArrowRight from '../../assets/arrow_right.svg';
import EffectGridLeft from '../../assets/effect_left_grid.svg';
import EffectGridRight from '../../assets/effect_right_grid.svg';

const projectsData = [
    {
        id: 1,
        description: "MINUX - софт для майнинга криптовалюты",
        videoUrl: "https://vk.com/video_ext.php?oid=-228313913&id=456239017&hash=4eaea793ffd4ca08",
    },
    {
        id: 2,
        description: "ReMind - домашний тренажер когнитивных и речевых способностей",
        videoUrl: "https://vk.com/video_ext.php?oid=-228313913&id=456239018&hash=c892ef2d23d72255",
    },
    {
        id: 3,
        description: "Хьюстон - HR-бот для подбора персонала",
        videoUrl: "https://vk.com/video_ext.php?oid=-228313913&id=456239019&hash=be8e8ab9e72efaac",
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
                    videoUrl={projectsData[currentIndex].videoUrl} 
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