import './Navigation.css';
import React from 'react';


function Navigation() {
    return(
      <nav className="navigation">
        <ul  className="navigation__links">
          <li className="navigation__link">
            <a className="navigation__link-item" href="#">Главная</a>
          </li>

          <li className="navigation__link">
            <button className="navigation__button-auth">Авторизоваться</button>
          </li>
        </ul>
      </nav>
    );
}

export default Navigation;
