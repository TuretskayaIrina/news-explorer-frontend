import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
    return(
      <section className="news">
        <h2 className="news__title">Результаты поиска</h2>

        <NewsCard />

        <button className="news__bth">Показать еще</button>
      </section>
    );
}

export default NewsCardList;
