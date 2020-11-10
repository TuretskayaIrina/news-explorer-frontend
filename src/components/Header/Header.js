import './Header.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header() {
    return(
      <header className="header">
        <div className="header__container">
          <p className="header__logo">NewsExplorer</p>
          <Navigation />
        </div>

      </header>
    );
}

export default Header;
