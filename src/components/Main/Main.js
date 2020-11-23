import './Main.css';
import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({ articles, showNews, showBth }) {

    return(
      <main className="main">
        <NewsCardList showNews={showNews} showBth={showBth} articles={articles}/>
      </main>
    );
}

export default Main;
