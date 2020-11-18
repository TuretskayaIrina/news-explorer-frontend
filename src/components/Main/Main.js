import './Main.css';
import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
// import NotFound from '../NotFound/NotFound';
// import Preloader from '../Preloader/Preloader';

function Main() {
    return(
      <main className="main">
        <NewsCardList />
        {/* <NotFound />
        <Preloader /> */}
      </main>
    );
}

export default Main;
