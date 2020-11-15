import React from 'react';
import { Route, Switch, useHistory  } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import PopupAuth from '../PopupAuth/PopupAuth';
import PopupRegister from '../PopupRegister/PopupRegister';
import PopupSuccessful from '../PopupSuccessful/PopupSuccessful';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function App() {

  const [isAuthPopupOpen, setAuthPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isSuccessfulPopupOpen, setSuccessfulPopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({name: 'Грета'});

  const history = useHistory();

  // открыть попап авторизации
  function handleAuthClick() {
    setAuthPopupOpen(true);
  }

  // открыть попап авторизации
  function handleResisterClick() {
    setRegisterPopupOpen(true);
  }

  // открыть попап успешной регистрации
  function handleSuccessfulClick() {
    setSuccessfulPopupOpen(true);
  }

  // обработчик переключения попапов
  function handleChangePopup() {
    console.log('переключили');

    if (isAuthPopupOpen) {
      handleResisterClick();
      setAuthPopupOpen(false);
    }
    if (isRegisterPopupOpen) {
      handleAuthClick();
      setRegisterPopupOpen(false);
    }
    if (isSuccessfulPopupOpen) {
      handleAuthClick();
      setSuccessfulPopupOpen(false);
    }

  }

  // закрытие всех попапов
  function closeAllPopups() {
    setAuthPopupOpen(false);
    setRegisterPopupOpen(false);
    setSuccessfulPopupOpen(false);
  }

  // обработчик авторизации
  // возможно, оставлять на главной и просто заменить кнопку в шапке?
  function handleAuth() {
    console.log('авторизовался');
    closeAllPopups()
    history.push('/saved-news');
  }

  // обработчик регистрации
  function handleRegister() {
    console.log('Зарегался');
    handleSuccessfulClick();
    setRegisterPopupOpen(false);
  }

  // закрыть на Esc
  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  // закрыть на overlay
  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  // слушатели для закрытия на esc и overlay
  React.useEffect(() => {
    window.addEventListener('keydown', handleEscClose);
    window.addEventListener('mousedown', handleOverlayClose);

    return () => {
      window.removeEventListener('keydown', handleEscClose);
      window.removeEventListener('mousedown', handleOverlayClose);
    };
  })

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header handleAuthClick={handleAuthClick}/>

        <Switch>
          <Route exact path="/">
            <SearchForm />
            <Main />
            <About />
          </Route>

          <Route path="/saved-news">
            <SavedNewsHeader />
            <SavedNews />
          </Route>
        </Switch>

        <Footer />

        <PopupAuth
          isOpen={isAuthPopupOpen}
          onClose={closeAllPopups}
          onAuth={handleAuth}
          onClickPopup={handleChangePopup}
        />

        <PopupRegister
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onRegister={handleRegister}
          onClickPopup={handleChangePopup}
        />

        <PopupSuccessful
        isOpen={isSuccessfulPopupOpen}
        onClose={closeAllPopups}
        onClickPopup={handleChangePopup}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
