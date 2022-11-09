import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  { img: 'status-order', title: 'Статус заказа', link: 'statusorder' },
  { img: 'favourite', title: 'Избранное', link: 'favourite', count: 1 },
  { img: 'compare', title: 'Сравнение', link: 'compare', count: 10 },
]

const Header = ({ isOpen, toggleSidebar }) => {
  const [isVisible, setIsVisible] = useState(false)

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
              
              {services.map(s=><Link to={s.link} className="header__top-btn" key={s.link}>
                <img src={`/images/icons/${s.img}.svg`} alt="" />
                {s.title}
                {s.count &&<div className="header__top-btn__sup">{s.count}</div>}
              </Link>)}
              

              {/* <Link to="/statusorder" className="header__top-btn">
                <img src="/images/icons/status-order.svg" alt="" />
                Статус заказа
              </Link>
              <div className="header__top-btn">
                <img src="/images/icons/favourite.svg" alt="" />
                Избранное
                <div className="header__top-btn__sup">1</div>
              </div>
              <div className="header__top-btn">
                <img src="/images/icons/compare.svg" alt="" />
                Сравнение
                <div className="header__top-btn__sup">10</div>
              </div> */}
            </div>
            <div className="cart">
              <div className="cart__left">
                <div className="cart__img" style={{ position: 'relative' }}>
                  <img src="/images/icons/cart.svg" alt="" />
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
                <img src="/images/icons/logo.svg" alt="" className="logo__img" />
              </Link>
            </div>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link to="/catalog" className="menu__link">
                    <img src="/images/icons/product-catalog.svg" alt="" />
                    Каталог
                  </Link>
                </li>
                <li className="menu__item mob">
                  <Link to="/dlya-malyshey" className="menu__link">
                    <img src="/images/icons/baby.svg" alt="" />
                    для малышей
                  </Link>
                </li>
                <li className="menu__item mob">
                  <Link to="/dlya-malchikov" className="menu__link">
                    <img src="/images/icons/boy.svg" alt="" />
                    для мальчиков
                  </Link>
                </li>
                <li className="menu__item mob">
                  <Link to="/dlya-devochek" className="menu__link">
                    <img src="/images/icons/girl.svg" alt="" />
                    для девочек
                  </Link>
                </li>
                <li className="menu__item mob">
                  <Link to="/dlya-vzroslyh" className="menu__link">
                    <img src="/images/icons/man.svg" alt="" />
                    для взрослых
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              className="user__profile"
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => setIsVisible(!isVisible)}
            >
              Пантелеймон
              <div className="user__list-item" style={{ display: 'flex', marginLeft: '15px' }}>
                <div
                  style={{ width: '30px', border: '1px solid: red', borderRadius: '50%', display: 'flex', alignItems: 'center', textAlign: 'center' }}
                >
                  <img src="/images/icons/user.svg" alt="" />
                </div>
              </div>
            </div>
            {isVisible && (
              <div
                style={{
                  position: 'absolute',
                  width: '120px',
                  padding: '10px',
                  right: '15px',
                  top: '122px',
                  backgroundColor: '#ffc42e',
                }}
              >
                Профиль
                <br />
                Мои заказы
                <br />
                Выход
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
