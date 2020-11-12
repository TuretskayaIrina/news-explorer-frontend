import './PopupRegister.css';
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupRegister({ isOpen,  onClose, onRegister, onClickPopup }) {

  const[ email, setEmail ] = React.useState('');
  const[ password, setPassword ] = React.useState('');
  const[ name, setName ] = React.useState('');

  // обработчик изменения email
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  // обработчик изменения пароля
  function handleChangePassword(e) {
    setPassword (e.target.value);
  }

  // обработчик изменения имени
  function handleChangeName(e) {
    setName (e.target.value);
  }

  // обработчик отправки регистрации
  function handleSubmit(e) {
    e.preventDefault();
    console.log('register');
    onRegister();
  }

  return(
    <PopupWithForm
    isOpen={isOpen}
    onClose={onClose}
    onClickPopup={onClickPopup}
    onSubmit={handleSubmit}
    name='popup-register'
    title='Регистрация'
    buttonText='Зарегистрироваться'
    clickButtonText='Войти'
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

        <label className="popup__label">Имя</label>
        <input
          value={name|| ''}
          onChange={handleChangeName}
          id="name"
          className="popup__input popup__input_name"
          type="text"
          name="namelInput"
          placeholder="Введите своё имя"
          required
          minLength="2"
          maxLength="30"
        />
        <span id="name-register-error" className="popup__input-error" >test</span>

        <span id="register-error" className="popup__input-error popup__register-error" >Такой пользователь уже есть</span>
      </>
    }
    />
  )

}


export default PopupRegister;
