//app.js
import React from 'react';
import {FeedbackButton, HeaderButton} from './ui-kit';

function App() {
    return (
        <div style={{ padding: '20px' }}>
            <HeaderButton text="О курсе" />
            <HeaderButton text="Наши проекты" />
            <HeaderButton text="Наставники" />
            <FeedbackButton/>
            <HeaderButton text="Курс ОПД ТУСУР" href="https://vk.com/opd_tusur"/>
        </div>
    );
}

export default App;