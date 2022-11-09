import React, { useState, useEffect } from 'react'
import CategoryCard from '../components/category/categoryCard'
// import ProductCard from '../components/products/productCard'
import axios from 'axios'

const Main = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/categories?isShow=true').then((res) => setCategories(res.data))
  }, [])

  return (
    <main className="main">
      <div className="container">
        <h1 className="title__general">Серии конструкторов Лего</h1>
        <div className="main__inner">
          <div className="category-cards__wrapper">
            {categories.map((category) => (
              <CategoryCard fileName={category.imgName} key={category.id} />
            ))}
          </div>
        </div>
        <div className="stock">
          <h2>Хиты продаж</h2>
          <div style={{ width: '100%' }}>
            <div className="product-card__wrapper">
              {/* <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard /> */}
            </div>
          </div>
        </div>
        <div className="stock">
          <h2>Новинки</h2>
          <div style={{ width: '100%' }}>
            <div className="product-card__wrapper">
              {/* <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard /> */}
            </div>
          </div>
        </div>
        <div className="stock">
          <h2>Акции</h2>
          <div style={{ width: '100%' }}>
            <div className="product-card__wrapper">
              {/* <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
