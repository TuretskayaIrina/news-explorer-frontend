import './Navigation.css';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logout from '../../images/icon/logout.svg';

function Navigation(props) {

  const { pathname } = useLocation();

  const navLinkBlack = `${pathname === '/saved-news' ? 'navigation__link-item_black' : ''}`;
  const navLinkActiveBlack = `${pathname === '/saved-news' ? 'navigation__link-item_active-black' : ''}`;
  const navButtonAuth = `${pathname === '/' ? 'navigation__button navigation__button-auth' : 'navigation__button-none'}`;
  const navButtonLogout = `${pathname === '/saved-news' ? 'navigation__button navigation__button_logout' : 'navigation__button-none'}`;
    return(
      <nav className="navigation">

        <div className="navigation__container">

          <NavLink exact to="/" className={`navigation__link-item navigation__link-decoration ${navLinkBlack}`} activeClassName={`navigation__link-item_active ${navLinkActiveBlack}`}>Главная</NavLink>
          <NavLink to="/saved-news" className={`navigation__link-item navigation__link-decoration ${navLinkBlack}`} activeClassName={`navigation__link-item_active ${navLinkActiveBlack}`}>Сохранённые статьи</NavLink>

          <button className={navButtonAuth} onClick={props.handleAuthClick}>Авторизоваться</button>

          <NavLink exact to="/" className="navigation__link-decoration">
            <button className={navButtonLogout}>Грета
              <img className="navigation__button-img" alt="logout" src={logout} />
            </button>
          </NavLink>

        </div>



      </nav>
    );
}

export default Navigation;
