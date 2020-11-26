import './SearchForm.css';
import React from 'react';

function SearchForm({ serchNews }) {

  const [keyword, setKeyword] = React.useState('');
  const [searchErrorMessage, setSearchErrorMessage] = React.useState('');

  // обработчик изменения инпута поиска
  function handleChangeKeyword(e) {
    setKeyword(e.target.value);
  }

  // обработчик отправки формы поиска
  function handleSubmit(e) {
    e.preventDefault();
    if (!keyword) {
      setSearchErrorMessage('Нужно ввести ключевое слово');
      return;
    }
    serchNews(keyword)
    setSearchErrorMessage('');
  }

    return(
      <section className="search">
        <div className="search__container">
          <h1 className="search__title">Что творится в мире?</h1>
          <p className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>

          <form className="search__form" noValidate onSubmit={handleSubmit}>
            <input
              className="search__input"
              placeholder="Введите тему новости"
              required
              onChange={handleChangeKeyword}
              value={keyword || ''}
            />
            <button className="search__bth">Искать</button>

            <span id="search-error" className="search__input-error">{searchErrorMessage}</span>
          </form>
        </div>
      </section>
    );
}

export default SearchForm;
