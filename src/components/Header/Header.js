import './Header.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {

  const { pathname } = useLocation();

  const headerWhite = `${pathname === '/saved-news' ? 'header_white' : ''}`;
  const headerLogoBlack = `${pathname === '/saved-news' ? 'header__logo_black' : ''}`;

    return(
      <header className={`header ${headerWhite}`}>
        <div className="header__container">
          <Link to="/" className={`header__logo ${headerLogoBlack}`}>NewsExplorer</Link>
          <Navigation handleAuthClick={props.handleAuthClick} />
        </div>

      </header>
    );
}

export default Header;
