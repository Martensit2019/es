import React, { useState, useEffect } from 'react'
import ProductCard from '../components/products/productCard'
import axios from 'axios'
import Pagination from '../components/pagination/pagination'

const Catalog = () => {
  const [products, setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  // const [pageSize, setPageSize] = useState(10)
  const pageSize = 10 // потом будем менять количество отображаемых товаров
  const countPages = totalProducts / pageSize

  useEffect(() => {
    axios.get('http://localhost:3001/products?_start=0&_limit=10').then((res) => {
      setProducts(res.data)
      setTotalProducts(res.headers['x-total-count'])
    })
  }, [])

  const handlePageChange = (pageIdx) => {
    console.log('page', pageIdx)
  }

  return (
    <div className="catalog-page">
      <div className="container">
        <div style={{ width: '100%' }}>
          <div className="catalog-page__title"></div>

          <div className="product-card__wrapper">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          {countPages}
          <Pagination itemsCount={totalProducts} pageSize={pageSize} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  )
}

export default Catalog
