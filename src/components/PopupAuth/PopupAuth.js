import './PopupAuth.css';
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupAuth({ isOpen,  onClose, onAuth, onClickPopup }) {

  const[ email, setEmail ] = React.useState('');
  const[ password, setPassword ] = React.useState('');

  // обработчик изменения email
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  // обработчик изменения пароля
  function handleChangePassword(e) {
    setPassword (e.target.value);
  }

  // обработчик отправки авторизации
  function handleSubmit(e) {
    e.preventDefault();
    console.log('working');
    onAuth();
  }

  return(
    <PopupWithForm
    isOpen={isOpen}
    onClose={onClose}
    onClickPopup={onClickPopup}
    onSubmit={handleSubmit}
    name='popup-auth'
    title='Вход'
    text='или '
    clickButtonText='Зарегистрироваться'
    children={
      <>
        <label className="popup__label">Email</label>
        <input
          value={email|| ''}
          onChange={handleChangeEmail}
          id="email"
          className="popup__input popup__input_email"
          type="text"
          name="emailInput"
          placeholder="Введите почту"
          required
          minLength="2"
          maxLength="30"
          pattern="\S+@\S+\.\S+"
        />
        <span id="email-auth-error" className="popup__input-error" >test</span>

        <label className="popup__label">Пароль</label>
        <input
          value={password || ''}
          onChange={handleChangePassword}
          id="password"
          className="popup__input popup__input_password"
          type="password"
          name="passwordInput"
          placeholder="Введите пароль"
          required
          minLength="8"
          maxLength="30"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
        />

        <span id="password-error" className="popup__input-error" />

        <button className="popup__button-save" type="submit">Сохранить</button>
      </>
    }
    />
  )

}


export default PopupAuth;
