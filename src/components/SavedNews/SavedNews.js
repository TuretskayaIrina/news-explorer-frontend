import './SavedNews.css'
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../NewsCard/NewsCard.css'
import first from '../../images/cards/image_01.jpg';
import second from '../../images/cards/image_05.jpg';
import third from '../../images/cards/image_06.jpg';

function SavedNews() {

  const { pathname } = useLocation();

  const categoryNone = `${pathname === '/' ? 'article__category_none' : ''}`;
  const articleButtonImg = `${pathname === '/' ? 'article__button-save' : 'article__button-delete'}`;
  const articleMessage = `${pathname === '/' ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}`;

    return(
      <section className="saved-news">
        <div className="saved-news__container">
          <div className="articles" >

            <a className="article" href="#" target="_blank" rel="noreferrer">
              <img alt="растение" className="article__img" src={third} />

              <div className="article__icons">
                <div className="article__icons-category">
                  <p className={`article__category ${categoryNone}`}>Природа</p>
                </div>

                <div className="article__icons-message">
                  <p className="article__message">{articleMessage}</p>
                  <button className={`article__button ${articleButtonImg}`} type="button" />
                </div>
              </div>

              <div className="article__about">
                <div className="article__about-container">
                  <p className="article__date">2 августа, 2019</p>
                  <h3 className="article__name">Национальное достояние – парки</h3>
                  <p className="article__description">В 2016 году Америка отмечала важный юбилей:
                    сто лет назад здесь начала складываться система национальных парков – охраняемых территорий,
                    где и сегодня каждый может приобщиться к природе.
                  </p>
                </div>

                <div className="article__source-container">
                  <p className="article__source">Дзен</p>
                </div>
              </div>
            </a>

            <a className="article" href="#" target="_blank" rel="noreferrer">
              <img alt="растение" className="article__img" src={first} />

              <div className="article__icons">
                <div className="article__icons-category">
                  <p className={`article__category ${categoryNone}`}>Природа</p>
                </div>

                <div className="article__icons-message">
                  <p className="article__message">{articleMessage}</p>
                  <button className={`article__button ${articleButtonImg}`} type="button" />
                </div>
              </div>

              <div className="article__about">
                <div className="article__about-container">
                  <p className="article__date">2 августа, 2019</p>
                  <h3 className="article__name">Лесные огоньки: история одной фотографии</h3>
                  <p className="article__description">Фотограф отвлеклась от освещения суровой политической реальности Мексики,
                    чтобы запечатлеть ускользающую красоту одного из местных чудес природы.
                  </p>
                </div>

                <div className="article__source-container">
                  <p className="article__source">Афиша</p>
                </div>
              </div>
            </a>

            <a className="article" href="#" target="_blank" rel="noreferrer">

              <img alt="растение" className="article__img" src={second} />

              <div className="article__icons">
                <div className="article__icons-category">
                  <p className={`article__category ${categoryNone}`}>Природа</p>
                </div>

                <div className="article__icons-message">
                  <p className="article__message">{articleMessage}</p>
                  <button className={`article__button ${articleButtonImg}`} type="button" />
                </div>
              </div>

              <div className="article__about">
                <div className="article__about-container">
                  <p className="article__date">2 августа, 2019</p>
                  <h3 className="article__name">«Первозданная тайга»: новый фотопроект Игоря Шпиленка</h3>
                  <p className="article__description">Знаменитый фотограф снимает первозданные леса России,
                    чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где очень очень очень много текста
                  </p>
                </div>
                <div className="article__source-container">
                  <p className="article__source">Медиазона</p>
                </div>
              </div>
            </a>

            <a className="article" href="#" target="_blank" rel="noreferrer">
              <img alt="растение" className="article__img" src={third} />

              <div className="article__icons">
                <div className="article__icons-category">
                  <p className={`article__category ${categoryNone}`}>Природа</p>
                </div>

                <div className="article__icons-message">
                  <p className="article__message">{articleMessage}</p>
                  <button className={`article__button ${articleButtonImg}`} type="button" />
                </div>
              </div>

              <div className="article__about">
                <div className="article__about-container">
                  <p className="article__date">2 августа, 2019</p>
                  <h3 className="article__name">Национальное достояние – парки</h3>
                  <p className="article__description">В 2016 году Америка отмечала важный юбилей:
                    сто лет назад здесь начала складываться система национальных парков – охраняемых территорий,
                    где и сегодня каждый может приобщиться к природе.
                  </p>
                </div>

                <div className="article__source-container">
                  <p className="article__source">Дзен</p>
                </div>
              </div>
            </a>

            <a className="article" href="#" target="_blank" rel="noreferrer">
              <img alt="растение" className="article__img" src={first} />

              <div className="article__icons">
                <div className="article__icons-category">
                  <p className={`article__category ${categoryNone}`}>Природа</p>
                </div>

                <div className="article__icons-message">
                  <p className="article__message">{articleMessage}</p>
                  <button className={`article__button ${articleButtonImg}`} type="button" />
                </div>
              </div>

              <div className="article__about">
                <div className="article__about-container">
                  <p className="article__date">2 августа, 2019</p>
                  <h3 className="article__name">Лесные огоньки: история одной фотографии</h3>
                  <p className="article__description">Фотограф отвлеклась от освещения суровой политической реальности Мексики,
                    чтобы запечатлеть ускользающую красоту одного из местных чудес природы.
                  </p>
                </div>

                <div className="article__source-container">
                  <p className="article__source">Афиша</p>
                </div>
              </div>
            </a>

          </div>
        </div>

      </section>
    );
}

export default SavedNews;
