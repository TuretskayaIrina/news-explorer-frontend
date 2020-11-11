import './SavedNewsHeader.css'
import React from 'react';

function SavedNewsHeader() {
    return(
      <section className="news-header">
        <p className="news-header__tile">Сохранённые статьи</p>
        <h1 className="news-header__counter">Грета, у вас 5 сохранённых статей</h1>
        <p className="news-header__keys">По ключевым словам
          <span className="news-header__keys-span"> Природа, Тайга </span>и
          <span className="news-header__keys-span"> 2-м другим</span>
        </p>
      </section>
    );
}

export default SavedNewsHeader;
