import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
// import articles from '../../data/articles';

function NewsCardList({ articles, showNews, showBth }) {

  const [newArticles, setNewArticles] = React.useState([]);

  React.useEffect(() => {
    setNewArticles(articles);
  }, [articles]);

    return(
      <section className={`news ${showNews ? '' : 'news_none'}`}>
        <h2 className="news__title">Результаты поиска</h2>

        <div className="articles">
          {newArticles.map((article, key) => (<NewsCard key={key} article={article}/>))}
        </div>

        <button className={`news__bth ${showBth ? '' : 'news__bth_none'}`}>Показать еще</button>
      </section>
    );
}

export default NewsCardList;
