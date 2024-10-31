//app.js
import React from 'react';
import Header from './components/Header';
import Opd from './components/Opd';
import Footer from './components/Footer';


function App() {
    return (
        <div style={{ padding: '0px' }}>
        <Header />
        <Opd/>
        {/* Другие компоненты вашего приложения */}
        <Footer />
    </div>
    );
}

export default App;