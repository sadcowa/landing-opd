//app.js
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Opd from './components/FirstBlock/Opd';
import Footer from './components/Footer/Footer';
import Leaders from './components/Leaders/Leaders';
import { FirstButton, Input } from './components/UI-kit/FirstButton/FirstButton';
import './App.css';
import InfoText from './components/InfoText/InfoText';

import { ReactComponent as ImageOPD1 } from './assets/image_OPD-1.svg'; 
import { ReactComponent as ImageOPD2 } from './assets/image_OPD-2.svg'; 



function App() {
    // let data = ['asd', 'sdfg']
    const [data, setData] = useState('')

    const sendData = (str) => {
        if (str) {
            setData(str)
        }
    }

    const showData = () => {
        alert(data)
    }
    return (
        <div>
        <Header/>
        <Opd/>
        <InfoText type='left' text="Первый блок" Image={ImageOPD1} />
        <InfoText type='right' text="Второй блок" Image={ImageOPD2} />
        <Leaders/>
        <Footer />
        <FirstButton handlerClick={showData} text={"Отправить"} />
        <Input placeholder="Введите текст" handlerChange={sendData} />
        
        {/* <h1 color='white'>KKKKKKKKK</h1> */}

    </div>
    );
}

export default App;