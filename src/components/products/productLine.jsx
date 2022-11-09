import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductLine = ({ product }) => {
  const { slug, articul, title, category, description, price } = product
  const [isFav, setIsFav] = useState(false)
  const [isCompare, setIsCompare] = useState(false)

  const imgUrl = `http://m977726h.beget.tech/images/eshop/product/${articul}-1.jpg`

  const toggleFavorite = () => {
    setIsFav((prev) => !prev)
  }
  const toggleCompare = () => {
    setIsCompare((prev) => !prev)
  }

  return (
    <div className="product-line">
      <Link to={`/product/${slug}`}>
          <div className="product-line__img">
        <img src={imgUrl} alt="" />
      </div>
      </Link>
    
      <div className="product-line__content">
        <h3 className="product-line__title">{title}</h3>
        <div className="product-line__articul">
          {category} {articul}
        </div>
        <div className="product-line__descr">{description} {description}</div>
        <div className="product-line__footer">
          <div className="product-line__servises">
            <button className="product-line__favorite" onClick={toggleFavorite}>
              <img src={'./images/icons/favourite' + (isFav ? '-card' : '') + '.svg'} alt="" />
            </button>
            <button className="product-line__compare" onClick={toggleCompare}>
            <img src={'./images/icons/compare' + (isCompare ? '-card' : '') + '.svg'} alt="" />
            </button>
          </div>
          <div className="product-line__info">
            <div className="product-line__price">{Math.round(price)}p.</div>
            <button className="product-line__btn">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductLine
