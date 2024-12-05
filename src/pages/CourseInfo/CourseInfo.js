import React from 'react';
import './CourseInfo.css'; 
import CourseImage1 from '../../assets/image_about_course.png'; 
import CourseImage2 from '../../assets/image_OPD-1.png'; 
import CourseImage3 from '../../assets/image_OPD-2.png'; 
import LineImage from '../../assets/line1.png'; 
import SecondLineImage from '../../assets/line2.png'; 

const CourseInfo = () => {
  return (
    <div id="section1" className="course-info">
      <h1 className="course-info-title text-green">О курсе</h1>
      <div className="course-section">
        <div className="course-text" style={{ width: '472px', height: 'auto' }}>
          <p>
            <span className="green-text course-title">Курс </span>
            <span className="course-white-text">
              содержит основную информацию в области проектной деятельности, которая сможет послужить базой для реализации собственного проекта.
            </span>
          </p>
          <br />
          <p>
            <span className="green-text course-title">Цель: </span>
            <span className="course-white-text">
              приобретение обучающимися компетенций в области проектной деятельности и реализации проекта.
            </span>
          </p>
          <br />
          <h2 className="green-text course-title">Задачи:</h2>
          <ul>
            <li className="course-white-text">развитие практико-ориентированного образования обучающихся;</li>
            <li className="course-white-text">развитие необходимых компетенций для реализации проектной деятельности;</li>
            <li className="course-white-text">приобретение навыков формирования и работы в команде, постановки и разделения задач внутри команды, определение проектных ролей.</li>
          </ul>
        </div>
        <img src={CourseImage1} alt="Course 1" className="course-image" style={{ width: '500px', height: 'auto' }} />
      </div>
      <div className="line-image-container">
        <img src={LineImage} alt="Line" className="line-image" />
      </div>

      <div className="course-section">
        <div style={{ marginRight: '300px' }}>
          <img 
              src={CourseImage2} 
              alt="Course 2" 
              className="course-image" 
              style={{ width: '495px', height: 'auto' }} 
          />
        </div>
        <div className="course-text-2" style={{ width: '200px', height: 'auto' }}>
          <h2 className="green-text opd-title">ОПД-1</h2>
          <p className="course-white-text ">
            В весеннем семестре Вам предстоит изучить основы теории проектной деятельности, а затем применить их на практике, разработав план для будущего проекта. Для этого Вам будет необходимо работать в команде, обсуждая аспекты проекта, изученные в теории, а затем защитить Ваш проект.
          </p>
        </div>
      </div>

      <div className="second-line-image-container">
        <img src={SecondLineImage} alt="Second Line" className="second-line-image" />
      </div>

      <div className="course-section">
        <div className="course-text" style={{ width: '341px', height: 'auto' }}>
          <h2 className="green-text opd-title">ОПД-2</h2>
          <p className="course-white-text" style={{ marginRight: '0px' }}>
            В осеннем семестре Вы будете работать над реальными проектами преподавателей университета и предприятий-партнеров. Вам необходимо будет выбрать и записаться на один из предложенных проектов и, работая в команде, создать совершенно новый инновационный продукт с нуля. В заключение курса, нужно будет представить созданный Вами продукт на защите.
          </p>
        </div>
        <div style={{ marginLeft: '200px' }}>
          <img 
              src={CourseImage3} 
              alt="Course 3" 
              className="course-image" 
              style={{ width: '500px', height: 'auto' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;