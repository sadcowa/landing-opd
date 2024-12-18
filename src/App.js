//app.js
import React from 'react';
import CourseInfo from './pages/CourseInfo/CourseInfo';
import Header from './components/Header/Header';
import Opd from './pages/TitleBlock/TitleBlock';
import MentorsSection from './pages/MentorsSection/MentorsSection';
import FeedbackForm from './pages/FeedbackForm/FeedbackForm';
import Footer from './components/Footer/Footer';
import Leaders from './pages/LeadersBlock/LeadersBlock';
import './App.css';
import OurProjects from './pages/OurProjectsBlock/OurProjectsBlock';


function App() {
    return (
        <div>
        <Header />
        <Opd />
        <CourseInfo />
        <OurProjects />
        <Leaders />
        <MentorsSection />
        <FeedbackForm />
        <Footer />
    </div>
    );
}

export default App;