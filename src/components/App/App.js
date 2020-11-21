import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupAuth from '../PopupAuth/PopupAuth';
import PopupRegister from '../PopupRegister/PopupRegister';
import PopupSuccessful from '../PopupSuccessful/PopupSuccessful';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/MainApi';


function App() {

  const [isAuthPopupOpen, setAuthPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isSuccessfulPopupOpen, setSuccessfulPopupOpen] = React.useState(false);
  const [isBurger, setBurger] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();

  // проверить токен в локальном хранилище при монтировании App
  React.useEffect(() => {
    tokenCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // обработчик регистрации
  function handleRegister(email, password, name) {
    return auth.register(email, password, name)
      .then(() => {
        console.log('Зарегался');
        handleSuccessfulClick();
        setRegisterPopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // проверить валидность токена и получить данные пользователя
  // использовать в шапке?
  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser({
              name: res.name
            });
            console.log(res.name);
            setLoggedIn(true);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  // обработчик авторизации
  function handleAuth(email, password) {
    return auth.authorize(email, password)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem('jwt', res.token);
          tokenCheck();
          console.log('авторизовался');
          closeAllPopups()
          history.push('/saved-news');
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  // разлогиниться
  function handleLogout() {
    localStorage.removeItem('jwt');
    history.push('/');
    setLoggedIn(false);
    console.log('разлогинились');
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

  // красим шапку меню
  // нужно что-то менять...
  // может красить в зависимости от скролла?
  function handleClickBurger() {
    console.log('checked');
    setBurger(true);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          handleAuthClick={handleAuthClick}
          handleLogout={handleLogout}
          isOpen={handleClickBurger}
          isOpenBurger={isBurger}
          loggedIn={loggedIn}
        />

        <Switch>
          <Route exact path="/">
            <SearchForm />
            <Main />
            <About />
          </Route>

          <ProtectedRoute
            path="/saved-news"
            loggedIn={loggedIn}
            component={SavedNews}
          />

          <Route>
            {loggedIn ? <Redirect to="/saved-news"/> : <Redirect to="/"/>}
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
