import React, { useState } from 'react';
import './FeedbackForm.css';
import Input from '../../components/UI-kit/Input/Input';
import TextArea from '../../components/UI-kit/Textarea/Textarea';
import SubmitButton from '../../components/UI-kit/SubmitButton/SubmitButton';

const FeedbackForm = () => {
  const [fio, setFio] = useState("");
  const [group, setGroup] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false); 
  const [isEmailError, setIsEmailError] = useState(false); 
  const [isFioError, setIsFioError] = useState(false); 
  const [isGroupError, setIsGroupError] = useState(false); 
  const [isDataSent, setIsDataSent] = useState(false);
  const [isDataSending, setIsDataSending] = useState(false);

  const onHandlerSend = (e) => {
    e.preventDefault();
    setIsDataSending(true);

    if (!fio || !group || !email || !message) {
      setIsError(true);
      setIsDataSending(false);
      return;
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      setIsEmailError(true);
      setIsDataSending(false);
      return;
    }

    const fioRe = /^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+(\s[А-ЯЁ][а-яё]+)?$/;
    if (!fioRe.test(fio)) {
      setIsFioError(true);
      setIsDataSending(false);
      return;
    }

    const groupRe = /^[0-9]+(-[А-ЯЁ0-9]+)?$/;
    if (!groupRe.test(group)) {
      setIsGroupError(true);
      setIsDataSending(false);
      return;
    }

    fetch('http://localhost:5000/mail', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fio: fio,
        group: group,
        email: email,
        message: message
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        setIsDataSent(true);
        setIsDataSending(false);
      })
      .catch((er) => {
        console.error('Error sending data: ', er);
        setIsDataSending(false);
      });
  }

  const isFormValid = () => {
    return !isError && !isEmailError && !isFioError && !isGroupError && !isDataSending;
  }

  const handleInputChange = (setter, value) => {
    setter(value);
    if (isError) setIsError(false);
    if (isEmailError) setIsEmailError(false);
    if (isFioError) setIsFioError(false);
    if (isGroupError) setIsGroupError(false);
    if (isDataSent) setIsDataSent(false);
  }

  return (
    <>
      <form id="feedback-section" className="feedback-form">
        <h1>
          <span className="text-green">Обратная</span> <span className="text-white">связь</span>
        </h1>
        <div className="form-group">
          <label htmlFor="fio">ФИО:</label>
          <Input
            id="fio"
            placeholder="Иванов Иван Иванович"
            value={fio}
            style={{ width: '1340px', height: '50px', marginBottom: '40px' }}
            onChange={(e) => handleInputChange(setFio, e.target.value)}
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "Иванов Иван Иванович"}
          />
        </div>

        <div className="form-flex">
          <div className="form-flex-column">
            <div className="form-group">
              <label htmlFor="group">Группа обучения:</label>
              <Input
                id="group"
                value={group}
                placeholder="123-4"
                style={{ width: '650px', height: '48px' }}
                onChange={(e) => handleInputChange(setGroup, e.target.value)}
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "123-4"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Input
                id="email"
                type="email"
                isEmailError={isEmailError}
                placeholder="Ivanov_Ivan@mail.ru"
                value={email}
                style={{ width: '650px', height: '48px' }}
                onChange={(e) => handleInputChange(setEmail, e.target.value)}
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Ivanov_Ivan@mail.ru"}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Сообщение:</label>
            <TextArea
              id="message"
              placeholder="Введите сообщение..."
              value={message}
              style={{ width: '650px', height: '190px' }}
              onChange={(e) => handleInputChange(setMessage, e.target.value)}
              onFocus={(e) => e.target.placeholder = ""}
              onBlur={(e) => e.target.placeholder = "Введите сообщение..."}
            />
          </div>
        </div>

        {(isError || isEmailError || isFioError || isGroupError || isDataSent) && (
          <div className={`message-text ${isDataSent ? 'success' : ''}`}>
          {isError ? 'Пожалуйста, заполните все поля' : 
           isEmailError ? 'Пожалуйста, введите корректный адрес почты' : 
           isFioError ? 'Пожалуйста, введите корректное ФИО' : 
           isGroupError ? 'Пожалуйста, введите корректный номер группы' : 
           'Спасибо за обращение! Вскоре мы Вам ответим'}
        </div>
        )}

        <div className="button-container">
          <SubmitButton disabled={!isFormValid()} onClick={(e) => onHandlerSend(e)}>Отправить</SubmitButton>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;