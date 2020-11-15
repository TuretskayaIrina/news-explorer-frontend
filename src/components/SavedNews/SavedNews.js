import './SavedNews.css'
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import saveArticles from '../../data/saveArticles';

function SavedNews() {

    return(
      <section className="saved-news">
        <div className="saved-news__container">

          {<div className="articles">
          {saveArticles.map((article) => <NewsCard key={article._id} article={article}/>)}
          </div>}

        </div>
      </section>
    );
}

export default SavedNews;
