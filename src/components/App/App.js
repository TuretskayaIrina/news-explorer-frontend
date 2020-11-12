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


function App() {

  const [isAuthPopupOpen, setAuthPopupOpen] = React.useState(false);
  const history = useHistory();

  // открыть попап авторизации
  function handleAuthClick() {
    setAuthPopupOpen(true);
  }

  // закрытие всех попапов
  function closeAllPopups() {
    setAuthPopupOpen(false);
  }

  // обработчик авторизации
  // возможно, оставлять на главной и просто заменить кнопку в шапке?
  function handleAuth() {
    console.log('авторизовался');
    closeAllPopups()
    history.push('/saved-news');
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
      />

    </div>
  );
}

export default App;
