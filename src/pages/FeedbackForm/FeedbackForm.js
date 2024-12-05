import React, { useState } from 'react';
import './FeedbackForm.css';
import Input from '../../components/UI-kit/Input/Input';
import TextArea from '../../components/UI-kit/TextArea/TextArea';
import SubmitButton from '../../components/UI-kit/SubmitButton/SubmitButton';

const FeedbackForm = () => {
  const [fio, setFio] = useState("Иванов Иван Иванович");
  const [group, setGroup] = useState("123-4");
  const [email, setEmail] = useState("Ivanov_Ivan@mail.ru");
  const [message, setMessage] = useState("Введите сообщение...");
  
  const [fioColor, setFioColor] = useState("#a8a8a8");
  const [groupColor, setGroupColor] = useState("#a8a8a8");
  const [emailColor, setEmailColor] = useState("#a8a8a8");
  const [messageColor, setMessageColor] = useState("#a8a8a8");

  const handleFocus = (setter) => {
    setter(""); 
  };

  const handleBlur = (value, setter, defaultValue, colorSetter, defaultColor) => {
    if (!value) {
      setter(defaultValue);
      colorSetter(defaultColor);
    }
  };

  return (
    <form id="feedback-section" className="feedback-form">
      <h1>
        <span className="text-green">Обратная</span> <span className="text-white">связь</span>
      </h1>
      <div className="form-group">
        <label htmlFor="fio">ФИО:</label>
        <Input 
          id="fio" 
          value={fio} 
          style={{ color: fioColor, width: '1340px', height: '50px', marginBottom: '40px' }} 
          onFocus={() => {
            handleFocus(setFio);
            setFioColor("#000000"); 
          }} 
          onBlur={() => {
            handleBlur(fio, setFio, "Иванов Иван Иванович", setFioColor, "#a8a8a8");
          }} 
          onChange={(e) => setFio(e.target.value)} 
        />
      </div>

      <div className="form-flex">
        <div className="form-flex-column">
          <div className="form-group">
            <label htmlFor="group">Группа обучения:</label>
            <Input 
              id="group" 
              value={group} 
              style={{ color: groupColor, width: '650px', height: '48px' }} 
              onFocus={() => {
                handleFocus(setGroup);
                setGroupColor("#000000"); 
              }} 
              onBlur={() => {
                handleBlur(group, setGroup, "123-4", setGroupColor, "#a8a8a8");
              }} 
              onChange={(e) => setGroup(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Input 
              id="email" 
              value={email} 
              style={{ color: emailColor, width: '650px', height: '48px' }} 
              onFocus={() => {
                handleFocus(setEmail);
                setEmailColor("#000000"); 
              }} 
              onBlur={() => {
                handleBlur(email, setEmail, "Ivanov_Ivan@mail.ru", setEmailColor, "#a8a8a8");
              }} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Сообщение:</label>
          <TextArea 
            id="message" 
            value={message} 
            style={{ color: messageColor, width: '650px', height: '190px' }} 
            onFocus={() => {
              handleFocus(setMessage);
              setMessageColor("#000000"); 
            }} 
            onBlur={() => {
              handleBlur(message, setMessage, "Введите сообщение...", setMessageColor, "#a8a8a8");
            }} 
            onChange={(e) => setMessage(e.target.value)} 
          />
        </div>
      </div>

      <div className="button-container">
        <SubmitButton type="submit">Отправить</SubmitButton>
      </div>
    </form>
  );
};

export default FeedbackForm;