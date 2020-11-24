import './Main.css';
import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({ articles, showNews, showBth, loggedIn }) {

    return(
      <main className="main">
        <NewsCardList showNews={showNews} showBth={showBth} articles={articles} loggedIn={loggedIn} />
      </main>
    );
}

export default Main;
