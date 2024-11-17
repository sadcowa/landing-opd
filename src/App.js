//app.js
import React from 'react';
import Header from './components/Header/Header';
import Opd from './pages/TitleBlock/TitleBlock';
import Footer from './components/Footer/Footer';
import Leaders from './pages/LeadersBlock/LeadersBlock';
import './App.css';
import OurProjects from './pages/OurProjectsBlock/OurProjectsBlock';


function App() {
    return (
        <div>
        <Header/>
        <Opd/>
        <OurProjects/>
        <Leaders/>
        <Footer />
    </div>
    );
}

export default App;