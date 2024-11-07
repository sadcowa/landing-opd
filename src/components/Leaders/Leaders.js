import React from 'react';
import './Leaders.css';
import Leader1 from '../assets/leader1.png';
import Leader2 from '../assets/leader2.png';

const Leaders = () => {
    return (
        <section className="course-leaders">
        <div className="leaders-title"  id="leaders-section">
            <span className="green-text">Руководители </span>
            <span className="white-text">курса</span>
        </div>
        <div className="leaders-container">
            <div className="leader">
                <img src={Leader1} alt="Имя Фамилия" className="leader-photo" />
                <p className="leader-name">Трубченинова Ирина</p>
                <p className="leader-position">Директор Центра<br />карьеры ТУСУР</p>
            </div>
            <div className="leader">
                <img src={Leader2} alt="Имя Фамилия" className="leader-photo" />
                <p className="leader-name">Макимова Камила</p>
                <p className="leader-position">Специалист по<br />учебно-методической<br />работе</p>
            </div>
        </div>
    </section>
    );
};

export default Leaders;