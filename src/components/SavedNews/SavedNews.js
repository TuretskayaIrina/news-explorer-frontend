import './SavedNews.css'
import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews({ loggedIn, myNews, keyword, handleSaveNews, handleDeleteNews }) {

    return(
      <section className="saved-news">
        <SavedNewsHeader />
        <div className="saved-news__background">
          <div className="saved-news__container">

            <div className="articles">
              {myNews.map((article) => (<NewsCard key={article._id} keyword={keyword} article={article} loggedIn={loggedIn} handleSaveNews={handleSaveNews} handleDeleteNews={handleDeleteNews}/>))}
            </div>

          </div>
        </div>

      </section>
    );
}

export default SavedNews;
