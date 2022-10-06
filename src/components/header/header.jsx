import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ isOpen, toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-inner">
            <div className={'burger ' + (isOpen ? 'prev' : '')} onClick={toggleSidebar}>
              <div className="bar top"></div>
              <div className="bar middle"></div>
              <div className="bar bottom"></div>
            </div>
            <div className="search">
              <input type="text" placeholder="Поиск" />
            </div>
            <div className="header__top-btns">
              <div className="header__top-btn">
                <img src="./images/icons/status-order.svg" alt="" />
                Статус заказа
              </div>
              <div className="header__top-btn">
                <img src="./images/icons/favourite.svg" alt="" />
                Избранное
                <div className="header__top-btn__sup">1</div>
              </div>
              <div className="header__top-btn">
                <img src="./images/icons/compare.svg" alt="" />
                Сравнение
                <div className="header__top-btn__sup">10</div>
              </div>
            </div>
            <div className="cart">
              <div className="cart__left">
                <div className="cart__img" style={{ position: 'relative' }}>
                  <img src="./images/icons/cart.svg" alt="" />
                  <div className="header__top-btn__sup" style={{ right: '-7px', color: '#000' }}>
                    11
                  </div>
                </div>
              </div>
              <div className="cart__right">
                <div className="cart__right-top">0 P</div>
                <div className="cart__right-bottom">Оформить заказ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-inner">
            <div className="logo">
              <Link to="/">
                <img src="./images/icons/logo.svg" alt="" className="logo__img" />
              </Link>
            </div>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link to="/catalog" className="menu__link">
                    <img src="./images/icons/product-catalog.svg" alt="" />
                    Каталог
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/dlya-malyshey" className="menu__link">
                    <img src="./images/icons/baby.svg" alt="" />
                    для малышей
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/dlya-malchikov" className="menu__link">
                    <img src="./images/icons/boy.svg" alt="" />
                    для мальчиков
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/dlya-devochek" className="menu__link">
                    <img src="./images/icons/girl.svg" alt="" />
                    для девочек
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/dlya-vzroslyh" className="menu__link">
                    <img src="./images/icons/man.svg" alt="" />
                    для взрослых
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="user__list">
              <div className="user__list-item" style={{ display: 'flex' }}>
                <div
                  style={{ width: '30px', border: '1px solid: red', borderRadius: '50%', display: 'flex', alignItems: 'center', textAlign: 'center' }}
                >
                  <img src="./images/icons/user.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
