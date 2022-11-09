import React from 'react'
import './breadcrumbs.scss'

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__list-item">
          <a href="/">Главная</a>
        </li>
        <li className="breadcrumbs__list-item">
          <span>Каталог</span>
        </li>
      </ul>
    </div>
  )
}

export default Breadcrumbs
