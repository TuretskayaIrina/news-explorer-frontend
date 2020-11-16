import './Header.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header(props) {

  const { pathname } = useLocation();

  const headerStyle = `${pathname === '/saved-news' ? 'header_white' : ''}`;
  const headerLogoBlack = `${pathname === '/saved-news' ? 'header__logo_black' : ''}`;

  function handleClickBurger(evt) {
    const checked = evt.target.checked;
    if (checked && pathname === '/') {
      console.log('checked');
    }
  }

    return(
      <header className={`header ${headerStyle}`}>
        <div className="header__container">
          <Link to="/" className={`header__logo ${headerLogoBlack}`}>NewsExplorer</Link>
          <Navigation handleAuthClick={props.handleAuthClick} />
          <BurgerMenu handleClickBurger={handleClickBurger}/>
        </div>

      </header>
    );
}

export default Header;
