import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import articles from '../../data/articles';

function NewsCardList() {
    return(
      <section className="news">
        <h2 className="news__title">Результаты поиска</h2>

        {<div className="articles">
        {articles.map((article) => <NewsCard key={article._id} article={article}/>)}
        </div>}

        <button className="news__bth">Показать еще</button>
      </section>
    );
}

export default NewsCardList;
