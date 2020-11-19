import './SavedNews.css'
import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCard from '../NewsCard/NewsCard';
import saveArticles from '../../data/saveArticles';

function SavedNews() {

    return(
      <section className="saved-news">
        <SavedNewsHeader />
        <div className="saved-news__background">
          <div className="saved-news__container">

            {<div className="articles">
            {saveArticles.map((article) => <NewsCard key={article._id} article={article}/>)}
            </div>}

          </div>
        </div>

      </section>
    );
}

export default SavedNews;
