import React from 'react';
import FeedbackForm from './components/ui/FeedbackForm';
import MentorsSection from './components/ui/MentorsSection';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <FeedbackForm />
            <MentorsSection />
        </div>
    );
};

export default App;