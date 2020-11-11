import './Navigation.css';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation() {

  const { pathname } = useLocation();

  const navLinkBlack = `${pathname === '/saved-news' ? 'navigation__link-item_black' : ''}`;
  const navLinkActiveBlack = `${pathname === '/saved-news' ? 'navigation__link-item_active-black' : ''}`;
  const navButtonBlack = `${pathname === '/saved-news' ? 'navigation__button-auth_black' : ''}`;

    return(
      <nav className="navigation">

        <NavLink exact to="/" className={`navigation__link-item ${navLinkBlack}`} activeClassName={`navigation__link-item_active ${navLinkActiveBlack}`}>Главная</NavLink>
        <NavLink to="/saved-news" className={`navigation__link-item ${navLinkBlack}`} activeClassName={`navigation__link-item_active ${navLinkActiveBlack}`}>Сохранённые статьи</NavLink>

        <button className={`navigation__button-auth ${navButtonBlack}`}>Авторизоваться</button>
      </nav>
    );
}

export default Navigation;
