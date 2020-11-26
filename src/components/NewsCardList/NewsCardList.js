import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ articles, showNews, loggedIn, handleSaveNews, handleDeleteNews, keyword }) {

  const [newArticles, setNewArticles] = React.useState([]);
  const [showBth, setShowBth] = React.useState(false)

  React.useEffect(() => {
    setNewArticles(articles.slice(0, 3));
    if (articles.length <= 3) {
      setShowBth(false);
    } else {
      setShowBth(true);
    }

  }, [articles]);

  function handlerClick() {
    setNewArticles(articles.slice(0, newArticles.length + 3));
    if (newArticles.length >= articles.length - 3) {
      setShowBth(false);
    }
  }

    return(
      <section className={`news ${showNews ? '' : 'news_none'}`}>
        <h2 className="news__title">Результаты поиска</h2>

        <div className="articles">
          {newArticles.map((article, key) => (<NewsCard key={key} keyword={keyword} article={article} loggedIn={loggedIn} handleSaveNews={handleSaveNews} handleDeleteNews={()=>handleDeleteNews(article._id)}/>))}
        </div>

        <button className={`news__bth ${showBth ? '' : 'news__bth_none'}`} onClick={handlerClick}>Показать еще</button>
      </section>
    );
}

export default NewsCardList;
