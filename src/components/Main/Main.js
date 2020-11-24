import './Main.css';
import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({ articles, showNews, showBth, loggedIn, handleSaveNews, handleDeleteNews, keyword }) {

    return(
      <main className="main">
        <NewsCardList
          showNews={showNews}
          showBth={showBth} articles={articles}
          loggedIn={loggedIn}
          handleSaveNews={handleSaveNews}
          handleDeleteNews={handleDeleteNews}
          keyword={keyword}
        />
      </main>
    );
}

export default Main;
