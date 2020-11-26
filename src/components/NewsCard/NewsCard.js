import './NewsCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import plug from '../../images/plug.jpg';

function NewsCard({ loggedIn, article, keyword, handleSaveNews, handleDeleteNews, }) {

  // тут нужно что-то сделать с логикой сохранения карточек и всплывающей подсказкой
  // в зависимости от ширины экрана и состояния залогинен/не залогинен

  const [click, setClick] = React.useState(false);

  const { pathname } = useLocation();

  const categoryNone = `${pathname === '/' ? 'article__category_none' : ''}`;
  const articleButtonImg = `${pathname === '/' ? 'article__button article__button-save' : 'article__button article__button-delete'}`;
  const articleButtonImgSave = `${pathname === '/' ? 'article__button article__button-save-news' : ''}`;
  const articleMessage = `${pathname === '/' ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}`;
  const articleMessageClass = `${pathname === '/' && loggedIn ? 'article__message_none' : 'article__message' }`;

  function handleDate(date) {
    // формат даты для записи в карточку
    let month =[
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июнья",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    let now = new Date(date);
    const formatDate = `${now.getDate()} ${month[now.getMonth()]}, ${now.getFullYear()}`;
    return formatDate;
  }

  function handlerClick() {
    if(!click && pathname === '/' ) {
      setClick(true);
      handleSaveNews(article, keyword);
    } else {
      setClick(false);
      handleDeleteNews();
    }
  }

    return(
      <div className="article" >
        <div className="article__icons">
          <div className="article__icons-category">
          <p className={`article__category ${categoryNone}`}>{article.keyword}</p>
          </div>

          <div className="article__icons-message">
            <p className={articleMessageClass}>{articleMessage}</p>
            <button className={click && loggedIn ? `${articleButtonImgSave}` : `${articleButtonImg}`} onClick={handlerClick} type="button" />
          </div>
        </div>

        <a className="article__link" href={article.url || article.link} target="_blank" rel="noreferrer">
          <img alt={article.title} className="article__img" src={article.urlToImage || article.image || plug} />

          <div className="article__about">
            <div className="article__about-container">
              <p className="article__date">{handleDate (article.publishedAt || article.date)}</p>
              <h3 className="article__name">{article.title}</h3>
              <p className="article__description">{article.description || article.text}
              </p>
            </div>

            <div className="article__source-container">
            <p className="article__source">{article.source.name || article.source}</p>
            </div>
          </div>
        </a>

      </div>
    );
}

export default NewsCard;
