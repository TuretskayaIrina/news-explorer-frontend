import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <SearchForm />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
