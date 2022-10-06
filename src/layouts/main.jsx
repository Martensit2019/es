import React from 'react'
import CategoryCard from '../components/category/categoryCard'
import ProductCard from '../components/products/productCard'

const Main = () => {
  // INSERT INTO `categories` (`id`, `title`, `descr`, `imgName`, `isShow`) VALUES (NULL, 'Duplo', '', 'duplo', '1');
  const categories = [
    { id: 1, title: 'Duplo', descr: '', imgName: 'duplo', isShow: 1 },
    // { id: 2, title: 'Classic', descr: '', imgName: '', isShow: 0 },
    { id: 3, title: 'Toy Story', descr: '', imgName: 'toy-story', isShow: 1 },
    { id: 4, title: 'City', descr: '', imgName: 'city', isShow: 1 },
    { id: 5, title: 'Creator', descr: '', imgName: 'creator', isShow: 1 },
    { id: 6, title: 'Disney', descr: '', imgName: 'disney', isShow: 1 },
    { id: 7, title: 'Friends', descr: '', imgName: 'friends', isShow: 1 },
    { id: 8, title: 'Marvel', descr: '', imgName: 'marvel', isShow: 1 },
    { id: 9, title: 'Mickey and Friends', descr: '', imgName: 'mickey-mouse', isShow: 1 },
    { id: 10, title: 'Star Wars', descr: '', imgName: 'star-wars', isShow: 1 },
    { id: 11, title: 'Nexo Knights', descr: '', imgName: 'nexo-knights', isShow: 1 },
    { id: 12, title: 'Ninjago', descr: '', imgName: 'ninjago', isShow: 1 },
    { id: 13, title: 'Harry Potter', descr: '', imgName: 'harry-potter', isShow: 1 },
    { id: 14, title: 'Boost', descr: '', imgName: 'boost', isShow: 1 },
    { id: 15, title: 'Architecture', descr: '', imgName: 'architecture', isShow: 1 },
    { id: 16, title: 'Super Mario', descr: '', imgName: 'super-mario', isShow: 1 },
    { id: 17, title: 'Minions', descr: '', imgName: 'minions', isShow: 1 },
    { id: 18, title: 'Technic', descr: '', imgName: 'technic', isShow: 1 },
    { id: 19, title: 'Dots', descr: '', imgName: 'dots', isShow: 1 },
    { id: 20, title: 'Batman', descr: '', imgName: 'batman', isShow: 1 },
    { id: 21, title: 'BrickHeadz', descr: '', imgName: 'brick-headz', isShow: 1 },
    { id: 22, title: 'Minifigures', descr: '', imgName: 'minifigures', isShow: 1 },
    { id: 23, title: 'Minecraft', descr: '', imgName: 'minecraft', isShow: 1 },
    { id: 24, title: 'Art', descr: '', imgName: 'art', isShow: 1 },
    { id: 25, title: 'Ideas', descr: '', imgName: 'ideas', isShow: 1 },
    { id: 26, title: 'LEGO Movie', descr: '', imgName: 'movie', isShow: 1 },
    { id: 27, title: 'Monkie Kid', descr: '', imgName: 'monkie-kid', isShow: 1 },
    { id: 28, title: 'Speed Champions', descr: '', imgName: 'speed-champions', isShow: 1 },
    { id: 29, title: 'Mindstorms', descr: '', imgName: 'mindstorms', isShow: 1 },
    { id: 30, title: 'Elves', descr: '', imgName: 'elves', isShow: 1 },
    { id: 31, title: 'Vidiyo', descr: '', imgName: 'vidiyo', isShow: 1 },
    { id: 32, title: 'Hidden Side', descr: '', imgName: 'hidden-side', isShow: 1 },
    { id: 33, title: 'Jurassic World', descr: '', imgName: 'jurassic-world', isShow: 1 },
    { id: 34, title: 'Overwatch', descr: '', imgName: 'overwatch', isShow: 1 },
    // { id: 34, title: 'Collections', descr: '', imgName: 'collections', isShow: 0 },
  ]

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
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
        <div className="stock">
          <h2>Новинки</h2>
          <div style={{ width: '100%' }}>
            <div className="product-card__wrapper">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
        <div className="stock">
          <h2>Акции</h2>
          <div style={{ width: '100%' }}>
            <div className="product-card__wrapper">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
