import './SavedNews.css'
import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews({ loggedIn, myNews, findMySevedNews }) {

    return(
      <section className="saved-news">
        <SavedNewsHeader myNews={myNews} />
        <div className="saved-news__background">
          <div className="saved-news__container">

            <div className="articles">
              {
                myNews.map((article, key) => (
                <NewsCard
                  key={key}
                  keyword={article.keyword}
                  myArticle={article}
                  title={article.title}
                  text={article.text}
                  date={article.date}
                  source={article.source}
                  link={article.link}
                  image={article.image}
                  loggedIn={loggedIn}
                  findMySevedNews={findMySevedNews}
                />))
              }
            </div>

          </div>
        </div>

      </section>
    );
}

export default SavedNews;
