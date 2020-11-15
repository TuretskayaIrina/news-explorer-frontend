import './NewsCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function NewsCard(props) {

  // тут нужно что-то сделать с логикой сохранения карточек и всплывающей подсказкой
  // в зависимости от ширины экрана и состояния залогинен/не залогинен

  const { pathname } = useLocation();

  const categoryNone = `${pathname === '/' ? 'article__category_none' : ''}`;
  const articleButtonImg = `${pathname === '/' ? 'article__button-save' : 'article__button-delete'}`;
  const articleMessage = `${pathname === '/' ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}`;

    return(
      <a className="article" href={props.article.sourse} key={props.article._id} target="_blank" rel="noreferrer">
        <img alt={props.article.title} className="article__img" src={props.article.urlToImage} />

        <div className="article__icons">
          <div className="article__icons-category">
          <p className={`article__category ${categoryNone}`}>{props.article.category}</p>
          </div>

          <div className="article__icons-message">
            <p className="article__message">{articleMessage}</p>
            <button className={`article__button ${articleButtonImg}`} type="button" />
          </div>
        </div>

        <div className="article__about">
          <div className="article__about-container">
            <p className="article__date">{props.article.publishedAt}</p>
            <h3 className="article__name">{props.article.title}</h3>
            <p className="article__description">{props.article.description}
            </p>
          </div>

          <div className="article__source-container">
            <p className="article__source">{props.article.sourseName}</p>
          </div>
        </div>
      </a>
    );
}

export default NewsCard;
