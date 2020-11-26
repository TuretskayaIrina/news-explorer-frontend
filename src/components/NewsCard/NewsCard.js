import './NewsCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import plug from '../../images/plug.jpg';

function NewsCard(props) {

  // тут нужно что-то сделать с логикой сохранения карточек и всплывающей подсказкой
  // в зависимости от ширины экрана и состояния залогинен/не залогинен

  const [click, setClick] = React.useState(false);

  const { pathname } = useLocation();

  const categoryNone = `${pathname === '/' ? 'article__category_none' : ''}`;
  // const articleButtonImg = `${pathname === '/' ? 'article__button article__button-save' : 'article__button article__button-delete'}`;

  const articleButtonImg = `${pathname === '/' ? 'article__button article__button-save' : 'article__button article__button-delete'}`;

  const articleButtonImgSave = `${pathname === '/' ? 'article__button article__button-save-news' : ''}`;
  const articleMessage = `${pathname === '/' ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}`;
  const articleMessageClass = `${pathname === '/' && props.loggedIn ? 'article__message_none' : 'article__message' }`;

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
      props.handleSaveNews(props.article, props.keyword);
    } else {
      setClick(false);
      props.handleDeleteNews();
    }
  }

    return(
      <div className="article" >
        <div className="article__icons">
          <div className="article__icons-category">
          <p className={`article__category ${categoryNone}`}>{props.article.keyword}</p>
          </div>

          <div className="article__icons-message">
            <p className={articleMessageClass}>{articleMessage}</p>
            {/* <button className={click && props.loggedIn ? `${articleButtonImgSave}` : `${articleButtonImg}`} onClick={handlerClick} type="button" /> */}
            <button className={click && props.loggedIn ? `${articleButtonImgSave}` : `${articleButtonImg}`} onClick={handlerClick} type="button" />
            {/* <button className="article__button article__button-delete" onClick={handlerClick} type="button" /> */}

          </div>
        </div>

        <a className="article__link" href={props.article.url || props.article.link} target="_blank" rel="noreferrer">
          <img alt={props.article.title} className="article__img" src={props.article.urlToImage || props.article.image || plug} />

          <div className="article__about">
            <div className="article__about-container">
              <p className="article__date">{handleDate (props.article.publishedAt || props.article.date)}</p>
              <h3 className="article__name">{props.article.title}</h3>
              <p className="article__description">{props.article.description || props.article.text}
              </p>
            </div>

            <div className="article__source-container">
            <p className="article__source">{props.article.source.name || props.article.source}</p>
            </div>
          </div>
        </a>

      </div>
    );
}

export default NewsCard;
