import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';


function App() {

  return (
    <div className="App">

      <Header />

      <Switch>
        <Route exact path="/">
          <SearchForm />
          <Main />
          <About />
        </Route>

        <Route path="/saved-news">
          <SavedNewsHeader />
          <SavedNews />
        </Route>
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
