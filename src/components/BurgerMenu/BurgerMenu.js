import './BurgerMenu.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logout from '../../images/icon/logout.svg';

function BurgerMenu(props) {

  const { pathname } = useLocation();

  const buttonAuth = `${pathname === '/' ? 'burger__link-bth burger__link-bth_white burger__link-bth_auth' : 'burger__link-bth_none'}`;
  const buttonLogout = `${pathname === '/saved-news' ? 'burger__link-bth burger__link-bth_dark burger__link-bth_logout' : 'burger__link-bth_none'}`;
  const textStyle = `${pathname === '/' ? 'burger__link_white burger__link' : 'burger__link burger__link_dark'}`;
  const bgStyle = `${pathname === '/saved-news' ? 'burger__list burger__list_white' : 'burger__list burger__list_dark' }`;
  const iconStyle = `${pathname === '/' ? 'burger__icon burger__icon_white' : 'burger__icon burger__icon_dark'}`;

    return(
      <div className="burger">

        <input type="checkbox" id="checkbox" className="burger__checkbox" onClick={props.isOpen}/>
        <label htmlFor="checkbox" className="burger__btn">
          <div className={iconStyle}></div>
        </label>

        <div className={(props.isOpen ? `burger__list_active ${bgStyle}` : `${bgStyle}`)}>
          <div className="burger__container">
            <Link to="/" className={textStyle}>Главная</Link>
            <Link to="/saved-news" className={textStyle}>Сохранённые статьи</Link>

            {/* тут будет ссылка на авторизацию, но так как ее пока нет стоит "/" чтобы консоль не ругалась */}
            <Link to="/" className={textStyle}>
              <button className={buttonAuth} onClick={props.handleAuthClick}>Авторизоваться</button>
            </Link>

            <Link to="/" className={textStyle}>
              <button className={buttonLogout}>Грета
                <img className="burger__link-img" alt="logout" src={logout} />
              </button>
            </Link>
          </div>
        </div>

      </div>

    );
}

export default BurgerMenu;
