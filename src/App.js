import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Catalog from './layouts/catalog'
import Baby from './layouts/dlya-malyshey'
import Product from './layouts/product'

// import Product from './layouts/product'
import Main from './layouts/main'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Boys from './layouts/dlya-malchikov'
import Girls from './layouts/dlya-devochek'
import Mens from './layouts/dlya-vzroslyh'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev)
    // console.log(isOpen)
  }
  const getClassesSidebar = () => {
    let classes = 'sidebar'
    return (classes += isOpen ? ' open' : '')
  }

  return (
    <div className="wrapper">
      <div className={getClassesSidebar()}>111</div>
      <div className="content">
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Switch>
          <Route path="/catalog" component={Catalog} />
          <Route path="/dlya-malyshey" component={Baby} />
          <Route path="/dlya-malchikov" component={Boys} />
          <Route path="/dlya-devochek" component={Girls} />
          <Route path="/dlya-vzroslyh" component={Mens} />
          <Route path="/product" component={Product} />
          <Route path="/" exact component={Main} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </div>
  )
  // return (
  //   <div className="wrapper">
  //     <div className={getClassesSidebar()}>111</div>
  //     {/* <div className="sidebar">111</div> */}
  //     <div className="content">
  //       <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
  //       <main className="main">
  //         <div className="container">
  //           <h1 className="title__general">Серии конструкторов Лего</h1>
  //           <div className="main__inner">
  //             <div className="category-cards__wrapper">
  //               {categories.map((category) => (
  //                 <CategoryCard fileName={category.imgName} key={category.id} />
  //               ))}
  //               {categories.map((category) => (
  //                 <CategoryCard fileName={category.imgName} key={category.id} />
  //               ))}
  //             </div>
  //           </div>
  //           <div className="stock">
  //             <h2>Хиты продаж</h2>
  //             <div style={{ width: '100%' }}>
  //               <div className="product-card__wrapper">
  //                 <ProductCard />
  //                 <ProductCard />
  //                 <ProductCard />
  //                 <ProductCard />
  //                 <ProductCard />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="stock">
  //             <h2>Новинки</h2>
  //             <div style={{ width: '100%' }}>
  //               <div className="product-card__wrapper">
  //                 <ProductCard />
  //                 <ProductCard />
  //                 <ProductCard />
  //                 <ProductCard />
  //                 <ProductCard />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="stock">
  //             <h2>Акции</h2>
  //             <div style={{ width: '100%' }}>
  //               <div className="product-card__wrapper">
  //                 <ProductCard />
  //                 <ProductCard />
  //                 <ProductCard />
  //                 <ProductCard />
  //                 <ProductCard />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </main>
  //       <footer className="footer">
  //         <div className="container">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rerum quasi porro ipsa nobis officiis facilis quos hic esse alias impedit
  //           cupiditate amet natus sapiente dolores soluta perferendis veniam, dolorem ut animi sed mollitia perspiciatis, quod suscipit. Quo dolorem
  //           accusantium hic ea. Sit culpa tempora in commodi, dolor eligendi non explicabo voluptatibus nisi veritatis voluptas nulla alias hic
  //           aliquam. Cumque ea asperiores harum tempore praesentium nostrum, quo exercitationem doloremque consectetur tenetur voluptatum vel.
  //           Accusantium libero fugiat iusto animi fugit tenetur perspiciatis voluptate neque aut officia recusandae minus odit rerum, voluptates
  //           sapiente tempore iure molestias ratione? Dolore autem commodi earum ex.
  //         </div>
  //       </footer>
  //     </div>
  //   </div>
  // )
}

export default App
