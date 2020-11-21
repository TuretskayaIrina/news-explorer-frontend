import './SearchForm.css';
import React from 'react';


function SearchForm({ serchNews }) {

  const [keyword, setKeyword] = React.useState('');

  // обработчик изменения инпута поиска
  function handleChangeKeyword(e) {
    setKeyword(e.target.value);
  }

  // обработчик отправки формы поиска
  function handleSubmit(e) {
    e.preventDefault();
    if (!keyword) {
      return;
    }
    serchNews(keyword)
  }

    return(
      <section className="search">
        <div className="search__container">
          <h1 className="search__title">Что творится в мире?</h1>
          <p className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>

          <form className="search__form" onSubmit={handleSubmit}>
            <input
              className="search__input"
              placeholder="Введите тему новости"
              required
              onChange={handleChangeKeyword}
              value={keyword || ''}
            />
            <button className="search__bth">Искать</button>
          </form>
        </div>
      </section>
    );
}

export default SearchForm;
