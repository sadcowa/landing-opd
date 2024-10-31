import React, { useState } from 'react';
import './FeedbackForm.css'; 

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

  return (
    <form>
      <h1>
        <span className="green-text">Обратная</span> <span className="white-text">связь</span>
      </h1>
      <div className="form-group">
        <label htmlFor="fio">ФИО:</label>
        <input 
          type="text" 
          id="fio" 
          className="input" 
          value={fio} 
          style={{ color: fioColor }} 
          onFocus={() => {
            handleFocus(setFio);
            setFioColor("#000000"); 
          }} 
          onBlur={() => {
            if (!fio) {
              setFio("Иванов Иван Иванович"); 
              setFioColor("#a8a8a8"); 
            }
          }} 
          onChange={(e) => setFio(e.target.value)} 
        />
      </div>

      <div className="form-flex">
        <div className="form-flex-column">
          <div className="form-group">
            <label htmlFor="group">Группа обучения:</label>
            <input 
              type="text" 
              id="group" 
              className="input" 
              value={group} 
              style={{ color: groupColor }} 
              onFocus={() => {
                handleFocus(setGroup);
                setGroupColor("#000000"); 
              }} 
              onBlur={() => {
                if (!group) {
                  setGroup("123-4"); 
                  setGroupColor("#a8a8a8"); 
                }
              }} 
              onChange={(e) => setGroup(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              className="input" 
              value={email} 
              style={{ color: emailColor }} 
              onFocus={() => {
                handleFocus(setEmail);
                setEmailColor("#000000"); 
              }} 
              onBlur={() => {
                if (!email) {
                  setEmail("Ivanov_Ivan@mail.ru"); 
                  setEmailColor("#a8a8a8"); 
                }
              }} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Сообщение:</label>
          <textarea 
            id="message" 
            className="textarea" 
            value={message} 
            style={{ color: messageColor }} 
            onFocus={() => {
              handleFocus(setMessage);
              setMessageColor("#000000"); 
            }} 
            onBlur={() => {
              if (!message) {
                setMessage("Введите сообщение..."); 
                setMessageColor("#a8a8a8"); 
              }
            }} 
            onChange={(e) => setMessage(e.target.value)} 
          ></textarea>
        </div>
      </div>

      {}
      <div className="button-container">
        <button type="submit" className="submit-button">Отправить</button>
      </div>
    </form>
  );
};

export default FeedbackForm;