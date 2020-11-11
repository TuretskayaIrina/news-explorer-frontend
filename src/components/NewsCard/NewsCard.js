import './NewsCard.css';
import React from 'react';
import first from '../../images/cards/image_08.jpg';
import second from '../../images/cards/image_04.jpg';
import third from '../../images/cards/image_07.jpg';

function NewsCard() {
    return(
      <div className="articles" >

        <a className="article" href="#" target="_blank" rel="noreferrer">
          <img alt="растение" className="article__img" src={first} />

          <div className="article__icons">
            <p className="article__message">Войдите, чтобы сохранять статьи</p>
            <button className="article__button" type="button" />
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
              <p className="article__source">Лента.ру</p>
            </div>
          </div>
        </a>

        <a className="article" href="#" target="_blank" rel="noreferrer">
          <img alt="растение" className="article__img" src={second} />

          <div className="article__icons">
            <p className="article__message">Войдите, чтобы сохранять статьи</p>
            <button className="article__button" type="button" />
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
              <p className="article__source">Медуза</p>
            </div>
          </div>
        </a>

        <a className="article" href="#" target="_blank" rel="noreferrer">
          <img alt="растение" className="article__img" src={third} />
          <div className="article__icons">
            <p className="article__message">Войдите, чтобы сохранять статьи</p>
            <button className="article__button" type="button" />
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
              <p className="article__source">РИА</p>
            </div>
          </div>
        </a>

      </div>

    );
}

export default NewsCard;
