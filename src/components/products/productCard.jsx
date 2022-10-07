import React, { useState } from 'react'

const ProductCard = ({ product }) => {
  const { articul, title, category, imgsmall, price } = product
  const [isFav, setIsFav] = useState(false)

  const toggleFavorite = () => {
    setIsFav((prev) => !prev)
  }



  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src="./images/21330_box1.jpg" alt="" />
      </div>
      <div className="product-card__articul">
        {category} {articul}
      </div>
      <h3 className="product-card__title">{title}</h3>
      <div className="product-card__price">{Math.round(price)}p.</div>

      <div className="product-card__foter">
        <div className="product-card__services">
          <button className="product-card__favorite" onClick={toggleFavorite}>
            <img src={'./images/icons/favourite' + (isFav ? '-card' : '') + '.svg'} alt="" />
          </button>
          <button className="product-card__favorite" onClick={toggleFavorite}>
            <img src={'./images/icons/favourite' + (isFav ? '-card' : '') + '.svg'} alt="" />
          </button>
        </div>
        <button className="product-card__basket">В корзину</button>
      </div>
    </div>
  )
}

export default ProductCard
