import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from '../components/pagination/pagination'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs'
import TopFilter from '../components/topFilter/topFilter'
import ProductsList from '../components/products/productsList'
import { useSelector } from 'react-redux'

const Catalog = () => {
  console.log('useLocation->', useLocation())
  const { search } = useLocation()
  const [products, setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = useSelector((state) => state.filter.productsPerPage) // количество продуктов на странице
  const selectedSort = useSelector((state) => state.filter.selectedSort)
  console.log('selectedSort000->', selectedSort)

  useEffect(() => {
    if (search) {
      const { page } = queryString.parse(search)
      setCurrentPage(Number(page))
    }
  }, [])

  // _sort=price  - цена по возрастанию 0->100
  // _sort=price&_order=desc  - цена по убыванию 100->0

  // _sort=title  - название по возрастанию 0->100

  // { id: 1, value: 'default', name: 'по умолчанию' },
  // { id: 2, value: '-price', name: 'сначала дорогие' },
  // { id: 3, value: 'price', name: 'сначала недорогие' },
  // { id: 4, value: 'title', name: 'по названию (А - Я)' },
  // { id: 5, value: '-title', name: 'по названию (Я - А)' },

  useEffect(() => {
    const sort = selectedSort.value !== 'default' ? `_sort=${selectedSort.value.replace('-', '')}&` : false
    const order = selectedSort.value.includes('-') ? '_order=desc&' : false

    axios.get(`http://localhost:3001/products?${sort}${order}_start=${(currentPage - 1) * pageSize}&_limit=${pageSize}`).then((res) => {
      setProducts(res.data)
      setTotalProducts(res.headers['x-total-count'])
    })
  }, [selectedSort, currentPage, pageSize])

  return (
    <div className="catalog-page">
      <div className="container">
        <div style={{ width: '100%' }}>
          <Breadcrumbs />
          <h1>Каталог конструкторов LEGO для детей</h1>
          <TopFilter />
          <ProductsList products={products} />
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
