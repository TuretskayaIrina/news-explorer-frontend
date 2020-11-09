import './Header.css';
import React from 'react';


function Header() {
    return(
      <header className="header">
        <div className="header__container">
          <p className="header__logo">NewsExplorer</p>
          <nav className="header__nav">
            <ul  className="header__links">
              <li className="header__link">
                <a className="header__link-item" href="#">Главная</a>
              </li>

              <li className="header__link">
                <button className="header__button-auth">Авторизоваться</button>
              </li>
            </ul>
          </nav>
        </div>

      </header>
    );
}

export default Header;
