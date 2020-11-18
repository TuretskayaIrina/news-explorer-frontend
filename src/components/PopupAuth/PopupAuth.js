import './PopupAuth.css';
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormValidator from '../../hooks/FormValidator';

function PopupAuth({ isOpen,  onClose, onAuth, onClickPopup }) {

  // это будет валидироваться статусами ответа от api
  // или выводить кастомное сообщение ошибки api, которое будет писать celebrate/Joi?
  // возможно использовать для вывода ошибок под инпутами
  // понятно будет после подключения api
  // а еще куда-то выводить "Неверная почта или пароль"
  // возможно над кнопкой "Войти" или добавить попап с ошибкой входа?
  // const [message, setMessage] = React.useState('Такой пользователь уже есть');

  const {values, handleChange, errors, isValid, resetForm} = FormValidator();
  React.useEffect(() => {
    resetForm();
  }, [ isOpen, resetForm ]);

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
          value={values.email|| ''}
          onChange={handleChange}
          id="email"
          className="popup__input popup__input_email"
          type="email"
          name="email"
          placeholder="Введите почту"
          required
        />
        <span id="email-auth-error" className="popup__input-error" >{errors.email || ''}</span>

        <label className="popup__label">Пароль</label>
        <input
          value={values.password || ''}
          onChange={handleChange}
          id="password"
          className="popup__input popup__input_password"
          type="password"
          name="password"
          placeholder="Введите пароль"
          required
        />

        <span id="password-error" className="popup__input-error" >{errors.password || ''}</span>

        <button className={`popup__button-save ${isValid ? 'popup__button-save_active' : 'popup__button-save_disabled'}`}  type="submit" disabled={!isValid}>Войти</button>
      </>
    }
    />
  )

}


export default PopupAuth;
