import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './productCard'
import ProductLine from './productLine'

const ProductsList = ({ products }) => {
  const activeGrid = useSelector((state) => state.filter.isGrid)
  return (
    <div className="products-list">
      {activeGrid ? (
        <div className="product-card__wrapper">
          {products.map((product) => (            
              <ProductCard product={product} key={product.id} />
            
          ))}
        </div>
      ) : (
        <div className="product-card__line">
          {products.map((product) => (
            <ProductLine product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductsList
