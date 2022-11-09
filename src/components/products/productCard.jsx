import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import translit from '../../services/translit'

const ProductCard = ({ product }) => {
  const { slug, articul, title, category, imgsmall, price } = product
  const [isFav, setIsFav] = useState(false)
  const [isCompare, setIsCompare] = useState(false)

  const imgUrl = `http://m977726h.beget.tech/images/eshop/product/${articul}-1.jpg`

  const toggleFavorite = (e) => {
    e.preventDefault()
    setIsFav((prev) => !prev)
  }
  const toggleCompare = (e) => {
    e.preventDefault()
    setIsCompare((prev) => !prev)
  }


  return (
    <div className="product-card">
      <Link to={`/product/${slug}`}>
        <div className="product-card__img">
          <img src={imgUrl} alt="" />
        </div>
      </Link>

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
          <button className="product-card__compare" onClick={toggleCompare}>
            <img src={'./images/icons/compare' + (isCompare ? '-card' : '') + '.svg'} alt="" />
          </button>
        </div>
        <button className="product-card__basket">В корзину</button>
      </div>
    </div>
  )
}

export default ProductCard
