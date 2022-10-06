import React from 'react'
import ProductCard from '../components/products/productCard'

const Catalog = () => {
  return (
    <div className="catalog-page">
      <div className="container">
        <div style={{ width: '100%' }}>
          <div className="product-card__wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
