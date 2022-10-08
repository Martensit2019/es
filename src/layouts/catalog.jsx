import React, { useState, useEffect } from 'react'
import ProductCard from '../components/products/productCard'
import axios from 'axios'
import Pagination from '../components/pagination/pagination'

const Catalog = () => {
  const [products, setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  // const [pageSize, setPageSize] = useState(10)
  const pageSize = 10 // потом будем менять количество отображаемых товаров

  useEffect(() => {
    axios.get(`http://localhost:3001/products?_start=${(currentPage-1)*pageSize}&_limit=${pageSize}`).then((res) => {
      setProducts(res.data)
      setTotalProducts(res.headers['x-total-count'])
    })
  }, [currentPage, pageSize])

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
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={totalProducts}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  )
}

export default Catalog
