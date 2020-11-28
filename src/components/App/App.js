import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupAuth from '../PopupAuth/PopupAuth';
import PopupRegister from '../PopupRegister/PopupRegister';
import PopupSuccessful from '../PopupSuccessful/PopupSuccessful';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as mainApi from '../../utils/MainApi';
import * as news  from '../../utils/NewsApi'


function App() {

  const [isAuthPopupOpen, setAuthPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isSuccessfulPopupOpen, setSuccessfulPopupOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const [isBurger, setBurger] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [myNews, setMyNews] = React.useState([]);
  const [showNews, setShowNews] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [keyword, setKeyword] = React.useState('');
  const [saved, setSaved] = React.useState(false);

  const [notFound, setNotFound] = React.useState(false);
  const [preloader, setPreloader] = React.useState(false);

  const history = useHistory();

  // проверить валидность токена и получить данные пользователя
  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    setArticles(JSON.parse(localStorage.getItem('articles')));
    if (jwt) {
      mainApi.getContent(jwt)
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

  // проверить токен в локальном хранилище при монтировании App
  React.useEffect(() => {
    tokenCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // залогиниться и получить сохраненные новости
  React.useEffect(() => {
    setArticles(JSON.parse(localStorage.getItem('articles')));
    if (loggedIn){
      return mainApi.getAllArticles()
      .then((news) => {
        setMyNews(news);
        console.log(news)
        })
      .catch((err) => {
        console.log(err)
      });
    }
  }, [loggedIn]);

  // открыть попап авторизации
  function handleAuthClick() {
    setAuthPopupOpen(true);
    setMessage('');
  }

  // открыть попап авторизации
  function handleResisterClick() {
    setRegisterPopupOpen(true);
    setMessage('');
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
      setMessage('');
    }
    if (isRegisterPopupOpen) {
      handleAuthClick();
      setRegisterPopupOpen(false);
      setMessage();
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
    setMessage('');
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

  // обработчик регистрации
  function handleRegister(email, password, name) {
    return mainApi.register(email, password, name)
      .then(() => {
        console.log('Зарегался');
        handleSuccessfulClick();
        setRegisterPopupOpen(false);
      })
      .catch((err) => {
        if (err.status === 400) {
          setMessage('Пороль должен быть без пробелов');
        } else if (err.status === 409) {
          setMessage('Пользователь с таким email уже зарегистрирован');
        } else {
          setMessage('Что-то пошло не так! Попробуйте ещё раз');
        }
      })
  }

  // обработчик авторизации
  function handleAuth(email, password) {
    return mainApi.authorize(email, password)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem('jwt', res.token);
          tokenCheck();
          console.log('авторизовался');
          closeAllPopups();
          history.push('/saved-news');
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          setMessage('Неправильные почта или пароль')
        } else if (err.status === 401) {
          setMessage('Неправильные почта или пароль')
        } else {
          setMessage('Что-то пошло не так! Попробуйте ещё раз')
        }
      })
  }

  // разлогиниться
  function handleLogout() {
    localStorage.removeItem('jwt');
    history.push('/');
    setLoggedIn(false);
    console.log('разлогинились');
  }

  // обработчик поиска новостей
  function handleSerchNews(keyword) {
    setPreloader(true);
    setNotFound(false);
    return news.getNews(keyword)
      .then((data) => {
        setShowNews(true);
        localStorage.setItem('articles', JSON.stringify(data.articles));
        setArticles(data.articles);
        console.log(data.articles);
        setKeyword(keyword);
        console.log(keyword);
        setNotFound(false);

        if (data.articles.length === 0) {
          setShowNews(false);
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  // получить сохраненные новости
  function getMySaveNews() {
    if (loggedIn){
      return mainApi.getAllArticles()
        .then((news) => {
          setMyNews(news);
          console.log(news);
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }

  // обработчик сохранения новости
  function handleSaveNews(article, keyword) {
    console.log('save news');
    return mainApi.saveNews(article, keyword)
      .then((res) => {
        getMySaveNews();
        console.log(res);
      })
  }

  // обработчик удаления новости
  function handleDeleteNews(id) {
    return mainApi.deleteNews(id)
      .then(() => {
        const arreyMyNews = myNews.filter((c) => (c._id !== id));
        setMyNews(arreyMyNews);
        console.log('delete');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  // проверяем есть ли новость в сохраненках
  function findMySevedNews(article, keyword, myArticle) {

    const mySavedArticle = myNews.find((c) => {
      if (myArticle) {
      return c.title === myArticle.title && c.text === myArticle.text;
      }

      if (article) {
        return c.title === article.title && c.text === article.description;
      }

    });

    if (mySavedArticle) {
      handleDeleteNews(mySavedArticle._id);
    } else {
      handleSaveNews(article, keyword);
    }
  }

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
            <SearchForm serchNews={handleSerchNews}/>
            <Main
              showNews={showNews}
              articles={articles}
              loggedIn={loggedIn}
              keyword={keyword}
              handleAuthClick={handleAuthClick}
              findMySevedNews={findMySevedNews}
              mySavedNews={myNews}
              saved={saved}
              setSaved={setSaved}
            />
            <NotFound
              handleNotFound={notFound}
            />
            <Preloader
              handlePreloader={preloader}
            />
            <About />
          </Route>

          <ProtectedRoute
            path="/saved-news"
            loggedIn={loggedIn}
            component={SavedNews}
            myNews={myNews}
            keyword={keyword}
            findMySevedNews={findMySevedNews}
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
          message={message}
        />

        <PopupRegister
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onRegister={handleRegister}
          onClickPopup={handleChangePopup}
          message={message}
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
