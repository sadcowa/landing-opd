import React from 'react';
import CourseInfo from './components/ui/CourseInfo'; 
import FeedbackForm from './components/ui/FeedbackForm';
import MentorsSection from './components/ui/MentorsSection';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <CourseInfo />
            <MentorsSection />
            <FeedbackForm />
        </div>
    );
};

export default App;